import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import destinations from '../data/destinations'

export default function Destinations() {
  useEffect(() => {
    document.title = 'Destinations – Travel Canada'

    // Handle anchor links from other pages (e.g. /destinations#banff).
    // With HashRouter the hash is part of the URL after the route hash,
    // so we read it from window.location.hash.
    const id = window.location.hash.replace(/^#.*#/, '').replace('#', '')
    if (id) {
      // Small delay to let React finish rendering before scrolling
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [])

  return (
    <>
      {/* Page header */}
      <header className="page-header">
        <h1>Explore Canada</h1>
        <p>8 incredible destinations waiting to be discovered</p>
      </header>

      {/* All 8 destination cards */}
      <section className="section destinations-section">
        <div className="container">
          <ScrollReveal className="cards-grid">
            {destinations.map(dest => (
              <article className="card" key={dest.id} id={dest.id}>
                <div className="card-img-wrap">
                  <img src={dest.image} alt={dest.alt} loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="badge">{dest.province}</span>
                  </div>
                  <h3 className="card-title">{dest.name}</h3>
                  {/* fullDesc is longer than shortDesc — used on this page */}
                  <p className="card-desc">{dest.fullDesc}</p>
                  <div className="card-footer">
                    <span>🗓 Best: {dest.bestTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
