import Link from 'next/link'
import Image from 'next/image'
import './Tile.css'

interface TileProps {
  object: {
    id: number
    images?: Array<{
      image:
        | number
        | {
            url?: string | null
            mimeType?: string | null
          }
        | string
      id?: string | null
    }> | null
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
      : typeof firstImage.image === 'number'
        ? { url: '', mimeType: '' }
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
          <Image className="tile-image" src={mediaUrl} alt="Artwork" width={400} height={400} />
        )}
      </Link>
    </div>
  )
}
