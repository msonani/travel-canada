import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import destinations from '../data/destinations'

// Only the 6 featured destinations appear on the home page
const featured = destinations.filter(d => d.featured)

// "Why Canada?" reasons data — keeping it in a plain array makes
// the JSX below shorter and easier to read.
const reasons = [
  { icon: '🏔️', title: 'Stunning Nature',      desc: "From the Rockies to the Bay of Fundy, Canada's landscapes are unmatched in scale and raw beauty." },
  { icon: '🌍', title: 'Multicultural Cities',  desc: "Toronto, Vancouver, and Montréal rank among the world's most diverse and welcoming urban centres." },
  { icon: '🦌', title: 'Wildlife Encounters',   desc: 'Spot grizzly bears, moose, beluga whales, and polar bears in their natural habitats.' },
  { icon: '🍁', title: 'Four Seasons',          desc: 'Fall foliage, winter skiing, spring wildflowers, or summer festivals — every season is spectacular.' },
  { icon: '🍽️', title: 'World-Class Food',     desc: "From poutine and fresh Maritime lobster to Vancouver sushi and Montréal smoked meat — Canada's food scene thrills." },
  { icon: '🛡️', title: 'Safe & Friendly',      desc: "Canada consistently ranks among the world's safest, most welcoming countries for international travellers." },
]

export default function Home() {
  // heroLoaded drives the CSS .loaded class that triggers the Ken Burns zoom-out
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    document.title = 'Travel Canada – Discover the True North'
    // requestAnimationFrame ensures the initial scale(1.05) has painted
    // before we start the 8-second transition back to scale(1)
    requestAnimationFrame(() => setHeroLoaded(true))
  }, [])

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={`hero${heroLoaded ? ' loaded' : ''}`}>
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to Canada 🇨🇦</p>
          <h1 className="hero-title">
            Discover the <span>True North</span>
          </h1>
          <p className="hero-description">
            From glacier-carved mountains to Atlantic seafood towns — explore
            Canada's breathtaking landscapes, welcoming cities, and
            once-in-a-lifetime adventures.
          </p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn btn-white">Explore Destinations</Link>
            <Link to="/tips"         className="btn btn-ghost">Travel Tips</Link>
          </div>
        </div>

        {/* Animated chevron hinting at content below */}
        <div className="scroll-indicator" aria-hidden="true" />
      </section>

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section className="section featured-intro">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">Hand-picked highlights from coast to coast</p>

          <p className="intro-text">
            Canada stretches over 10 million square kilometres — the world's
            second-largest country. Whether you're chasing northern lights,
            tasting fresh lobster in Nova Scotia, or skiing perfect powder in
            the Rockies, there's a corner of Canada that will captivate you.
          </p>

          {/*
            ScrollReveal wraps the grid and uses IntersectionObserver
            to fade each card in as you scroll down.
          */}
          <ScrollReveal className="cards-grid">
            {featured.map(dest => (
              <article className="card" key={dest.id}>
                <div className="card-img-wrap">
                  <img src={dest.image} alt={dest.alt} loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="badge">{dest.province}</span>
                  </div>
                  <h3 className="card-title">{dest.name}</h3>
                  <p className="card-desc">{dest.shortDesc}</p>
                  <div className="card-footer">
                    <span>🗓 {dest.bestTime}</span>
                    <Link
                      to={`/destinations#${dest.id}`}
                      className="btn btn-outline"
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>

          <div className="cta-center">
            <Link to="/destinations" className="btn btn-primary">
              View All 8 Destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CANADA ===== */}
      <section className="section why-canada">
        <div className="container">
          <h2 className="section-title">Why Visit Canada?</h2>
          <p className="section-subtitle">
            A few of the many reasons travellers fall in love with the True North
          </p>

          <ScrollReveal className="features-grid">
            {reasons.map(r => (
              <div className="feature-item" key={r.title}>
                <div className="feature-icon">{r.icon}</div>
                <h3 className="feature-title">{r.title}</h3>
                <p className="feature-desc">{r.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
