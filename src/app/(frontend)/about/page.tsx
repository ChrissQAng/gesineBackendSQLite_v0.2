import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import BackArrow from '@/components/BackArrow/BackArrow'
import './about.css'

interface LexicalNode {
  type: string
  text?: string
  format?: number
  children?: LexicalNode[]
}

interface LexicalRichText {
  root?: {
    children?: LexicalNode[]
  }
}

/**
 * Recursively render Lexical richText nodes to React elements.
 * Handles paragraph, text (with italic format), and linebreak nodes.
 */
function renderLexicalChildren(children: LexicalNode[]): React.ReactNode[] {
  return children.map((node: LexicalNode, i: number) => {
    if (node.type === 'linebreak') {
      return <br key={i} />
    }

    if (node.type === 'text') {
      let content: React.ReactNode = node.text
      // Lexical format bitmask: 1 = bold, 2 = italic, 4 = strikethrough, 8 = underline
      if ((node.format ?? 0) & 2) {
        content = <i key={i}>{content}</i>
      }
      if ((node.format ?? 0) & 1) {
        content = <b key={i}>{content}</b>
      }
      return <React.Fragment key={i}>{content}</React.Fragment>
    }

    // Paragraph or other block node with children
    if (node.children && Array.isArray(node.children)) {
      return <React.Fragment key={i}>{renderLexicalChildren(node.children)}</React.Fragment>
    }

    return null
  })
}

function renderRichText(richText: string | LexicalRichText): React.ReactNode {
  if (typeof richText === 'string') return richText
  if (!richText?.root?.children) return ''

  const paragraphs = richText.root.children
  // If there's only one paragraph, render inline
  if (paragraphs.length === 1) {
    return renderLexicalChildren(paragraphs[0].children || [])
  }

  // Multiple paragraphs: join with <br/>
  return paragraphs.map((para: LexicalNode, i: number) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {renderLexicalChildren(para.children || [])}
    </React.Fragment>
  ))
}

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all vita sections
  const vitaSections = await payload.find({
    collection: 'vitaSections',
    limit: 100,
  })

  // Fixed display order
  const sectionOrder = [
    'teaching',
    'grants, prizes, residencies',
    'selected solo/duo shows',
    'selected group shows',
    'collections',
  ]

  const orderedSections = sectionOrder
    .map((title) => vitaSections.docs.find((s) => s.title === title))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <div className="about-wrapper">
      <video autoPlay playsInline loop muted className="background-video">
        <source src="/background-video.mp4" type="video/mp4" />
        FUCK !!! NO VIDEO !!! WRONG BROWSER ?
      </video>
      <div className="content">
        <BackArrow />
        <h2>about</h2>
        <p>* 1974, lives and works in Cologne</p>
        <h4>education</h4>
        <p>Kunstakademie Düsseldorf, master student / Rosemarie Trockel, 2005</p>
        <p>MA Fine Art, Goldsmiths College, London (2002)</p>

        {orderedSections.map((section) => {
          const isCollections =
            section.title.toLowerCase() === 'collections'
          const isSoloDuo =
            section.title.toLowerCase().includes('solo/duo')

          return (
            <div key={section.id} className="vita-section">
              <h4>
                {isSoloDuo ? (
                  <>
                    selected solo/duo shows <span>(c) catalogue</span>
                  </>
                ) : (
                  section.title
                )}
              </h4>

              {isCollections
                ? // Collections: plain text entries, no year column
                  Array.isArray(section.entries) &&
                  section.entries.map((entry, index) => (
                    <p key={entry.id || index}>{renderRichText(entry.text)}</p>
                  ))
                : // Other sections: two-column layout with year + text
                  Array.isArray(section.entries) &&
                  section.entries.map((entry, index) => {
                    return (
                      <div
                        key={entry.id || index}
                        className="table-item"
                      >
                        <p>{entry.year || ''}</p>
                        <div className="entry-text">{renderRichText(entry.text)}</div>
                      </div>
                    )
                  })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
