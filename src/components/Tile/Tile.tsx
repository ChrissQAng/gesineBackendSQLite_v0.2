import Link from 'next/link'
import './Tile.css'

interface TileProps {
  object: {
    id: string
    images?: Array<{
      image:
        | {
            url?: string
            mimeType?: string
          }
        | string
    }>
  }
}

export default function Tile({ object }: TileProps) {
  if (!object.images || object.images.length === 0) {
    return null
  }

  const firstImage = object.images[0]
  const image =
    typeof firstImage.image === 'string'
      ? { url: firstImage.image, mimeType: '' }
      : firstImage.image

  const mediaUrl = image?.url || ''
  const mimeType = image?.mimeType || ''
  const isVideo = mimeType?.startsWith('video/')

  return (
    <div className="tile-wrapper">
      <Link href={`/details/${object.id}`}>
        {isVideo ? (
          <video
            className="tile-image"
            src={mediaUrl}
            controls={false}
            muted
            autoPlay
            loop
            playsInline
          />
        ) : (
          <img className="tile-image" src={mediaUrl} alt="Artwork" />
        )}
      </Link>
    </div>
  )
}
