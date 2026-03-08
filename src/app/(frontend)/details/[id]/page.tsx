import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import BackArrow from '@/components/BackArrow/BackArrow'
import './details.css'

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
        {artObject && artObject.images ? (
          artObject.images.map((item, index) => {
            const image = item.image as any
            const mediaUrl = image?.url || ''
            const mimeType = image?.mimeType || ''
            const isVideo = mimeType?.startsWith('video/')

            return isVideo ? (
              <video src={mediaUrl} key={index} controls autoPlay loop muted playsInline />
            ) : (
              <img src={mediaUrl} key={index} alt={`Artwork ${index + 1}`} />
            )
          })
        ) : (
          <p>No images available</p>
        )}
        {artObject && artObject.description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html:
                typeof artObject.description === 'string'
                  ? artObject.description
                  : (artObject.description as any)?.root?.children
                      ?.map((child: any) => child.children?.map((c: any) => c.text).join('') || '')
                      .join('<br/>') || '',
            }}
          />
        )}
      </div>
    </div>
  )
}
