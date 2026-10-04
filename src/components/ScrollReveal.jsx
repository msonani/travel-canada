import { useEffect, useRef } from 'react'

/*
 * ScrollReveal — wrapper component that animates its children into view.
 *
 * Usage:
 *   <ScrollReveal className="cards-grid">
 *     <article className="card">…</article>
 *     …
 *   </ScrollReveal>
 *
 * How it works:
 *  1. Gets a ref to the wrapper <div>.
 *  2. On mount, sets up an IntersectionObserver that watches every
 *     .card, .tip-card and .feature-item inside the wrapper.
 *  3. When an item enters the viewport the observer adds the CSS
 *     class "visible", which triggers the fade-in/slide-up transition
 *     defined in index.css.
 *  4. Items are staggered 80 ms apart so they appear one by one.
 */
export default function ScrollReveal({ children, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll('.card, .tip-card, .feature-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger: add 80ms delay per item
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 80)
            // Stop watching once the item has appeared
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach(item => observer.observe(item))

    // Cleanup when the component unmounts (e.g. navigating to another page)
    return () => observer.disconnect()
  }, []) // empty array = run once after the first render

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
