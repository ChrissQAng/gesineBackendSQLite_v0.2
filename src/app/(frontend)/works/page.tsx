import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import BackArrow from '@/components/BackArrow/BackArrow'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import Tile from '@/components/Tile/Tile'
import './works.css'

export default async function WorksPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all art objects ordered by orderOfObjects
  const artObjects = await payload.find({
    collection: 'artObjects',
    sort: 'orderOfObjects',
    limit: 0,
  })

  return (
    <div className="worksWrapper">
      <BackArrow />
      <ScrollToTop />
      <h2>works</h2>
      <div className="tileGrid">
        {artObjects.docs.map((item) => (
          <Tile key={item.id} object={item as any} />
        ))}
        {artObjects.docs.length === 0 && <p>No works available</p>}
      </div>
    </div>
  )
}
