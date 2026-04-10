import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import BackArrow from '@/components/BackArrow/BackArrow'
import ScrollRestore from '@/components/ScrollRestore/ScrollRestore'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import Tile from '@/components/Tile/Tile'
import type { ArtObject } from '@/payload-types'
import './works.css'

export default async function WorksPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all art objects ordered by orderOfObjects
  const artObjects = await payload.find({
    collection: 'artObjects',
    sort: '_order',
    limit: 0,
  })

  return (
    <div className="worksWrapper">
      <BackArrow />
      <ScrollRestore />
      <ScrollToTop />
      <h2>works</h2>
      <div className="tileGrid">
        {artObjects.docs.map((item) => (
          <Tile key={item.id} object={item as ArtObject} />
        ))}
        {artObjects.docs.length === 0 && <p>No works available</p>}
      </div>
    </div>
  )
}
