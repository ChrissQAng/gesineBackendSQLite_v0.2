'use client'

import { useState, useCallback, type ReactNode } from 'react'

interface DetailHeroProps {
  description: ReactNode
  children: ReactNode
  rest?: ReactNode
}

export default function DetailHero({ description, children, rest }: DetailHeroProps) {
  const [width, setWidth] = useState<number | undefined>(undefined)
  const mediaRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return
    const media = node.querySelector('img, video') as HTMLElement | null
    if (!media) return

    const update = () => {
      if (media.clientWidth > 0) setWidth(media.clientWidth)
    }

    if (media.tagName === 'IMG') {
      const img = media as HTMLImageElement
      if (img.complete) {
        update()
      } else {
        img.addEventListener('load', update)
      }
    } else {
      const video = media as HTMLVideoElement
      video.addEventListener('loadedmetadata', update)
      update()
    }

    const observer = new ResizeObserver(() => update())
    observer.observe(media)
  }, [])

  return (
    <div className="detail-hero">
      <div ref={mediaRef}>{children}</div>
      <div className="description-wrap" style={width ? { width: `${width}px` } : undefined}>
        {description}
      </div>
      {rest && (
        <div className="detail-rest" style={width ? { width: `${width}px` } : undefined}>
          {rest}
        </div>
      )}
    </div>
  )
}
