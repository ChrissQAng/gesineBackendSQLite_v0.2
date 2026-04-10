'use client'

import { useEffect } from 'react'

const STORAGE_KEY = 'works-scroll-position'

export default function ScrollRestore() {
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10))
    }

    const handleScroll = () => {
      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
