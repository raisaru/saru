import { useState, useEffect } from 'react'

/**
 * useTheme
 * Manages dark/light mode by toggling a `data-theme` attribute on <html>.
 * Persists preference to localStorage and respects system preference on first visit.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage
    const stored = localStorage.getItem('portfolio-theme')
    if (stored) return stored
    // 2. Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
