import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'

import config from '@/payload.config'
import BackArrow from '@/components/BackArrow/BackArrow'
import DetailHero from '@/components/DetailHero/DetailHero'
import type { Media } from '@/payload-types'
import './details.css'

interface LexicalTextNode {
  text?: string
  children?: LexicalTextNode[]
}

interface LexicalDescription {
  root?: {
    children?: LexicalTextNode[]
  }
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function DetailsPage({ params }: PageProps) {
  const { id } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch the specific art object
  const artObject = await payload.findByID({
    collection: 'artObjects',
    id: id,
  })

  return (
    <div className="detail-wrapper">
      <BackArrow />
      <div className="detail">
        {artObject && artObject.images && artObject.images.length > 0 ? (
          <>
            <DetailHero
              description={
                artObject.description ? (
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof artObject.description === 'string'
                          ? artObject.description
                          : ((artObject.description as LexicalDescription)?.root?.children
                               ?.map((child: LexicalTextNode) => child.children?.map((c: LexicalTextNode) => c.text).join('') || '')
                               .join('<br/>')) || '',
                    }}
                  />
                ) : null
              }
              rest={
                <>
                  {artObject.images.slice(1).map((item, index) => {
                    const image = item.image as Media
                    const mediaUrl = image?.url || ''
                    const mimeType = image?.mimeType || ''
                    const isVideo = mimeType?.startsWith('video/')
                    return isVideo ? (
                      <video src={mediaUrl} key={index + 1} controls autoPlay loop muted playsInline />
                    ) : (
                      <Image src={mediaUrl} key={index + 1} alt={`Artwork ${index + 2}`} width={800} height={600} style={{ width: '100%', height: 'auto' }} />
                    )
                  })}
                </>
              }
            >
              {(() => {
                const first = artObject.images[0]
                const image = first.image as Media
                const mediaUrl = image?.url || ''
                const mimeType = image?.mimeType || ''
                const isVideo = mimeType?.startsWith('video/')
                return isVideo ? (
                  <video className="detail-first-media" src={mediaUrl} controls autoPlay loop muted playsInline />
                ) : (
                  <Image className="detail-first-media" src={mediaUrl} alt="Artwork 1" width={800} height={600} style={{ width: 'auto', height: 'auto' }} />
                )
              })()}
            </DetailHero>
          </>
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  )
}
