import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import './home.css'

export default async function HomePage() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <h1>Gesine Grundmann</h1>
        <Image src="/images/image.png" alt="Navigation" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
        <Link href="/about" className="about">
          about
        </Link>
        <Link href="/contact" className="contact">
          contact
        </Link>
        <Link href="/texts" className="texts">
          texts
        </Link>
        <Link href="/views" className="views">
          views
        </Link>
        <Link href="/works" className="works">
          works
        </Link>
        <Link href="/music" className="music">
          120 den
        </Link>
        <Link href="/imprint" className="imprint">
          impressum
        </Link>
      </div>
    </div>
  )
}
