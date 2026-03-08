import Link from 'next/link'
import React from 'react'
import './home.css'

export default async function HomePage() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <h1>Gesine Grundmann</h1>
        <img src="/images/image.png" alt="Navigation" />
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
