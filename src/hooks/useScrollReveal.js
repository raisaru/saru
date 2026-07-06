import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, it adds the CSS class
 * that triggers the reveal animation defined in global.css.
 *
 * @param {object} options  IntersectionObserver options
 * @param {number} delay    Extra delay (ms) added via inline style
 */
export function useScrollReveal(options = {}, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el) // fire once
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
