import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Tips() {
  useEffect(() => {
    document.title = 'Travel Tips – Travel Canada'
  }, [])

  return (
    <>
      <header className="page-header">
        <h1>Travel Tips</h1>
        <p>Everything you need to know before you go</p>
      </header>

      <section className="section tips-section">
        <div className="container">
          <ScrollReveal className="tips-grid">

            {/* ---- 1. Best Seasons ---- */}
            <div className="tip-card">
              <div className="tip-icon">🌦️</div>
              <h3 className="tip-title">Best Seasons to Visit</h3>
              <div className="tip-content">
                <p>
                  Canada is a year-round destination — each season delivers a
                  completely different experience. There is no single "best" time;
                  it depends on what you want to do.
                </p>
                <div className="seasons-grid">
                  <div className="season">
                    <div className="season-name">🌸 Spring (Mar–May)</div>
                    <div className="season-desc">Wildflowers, fewer crowds, and national parks coming back to life. Perfect for eastern cities.</div>
                  </div>
                  <div className="season">
                    <div className="season-name">☀️ Summer (Jun–Aug)</div>
                    <div className="season-desc">Peak season — long days, festivals, hiking, and beach time on both coasts. Book well in advance.</div>
                  </div>
                  <div className="season">
                    <div className="season-name">🍂 Fall (Sep–Nov)</div>
                    <div className="season-desc">Spectacular foliage, especially in Ontario and Québec. Fewer tourists and lower prices.</div>
                  </div>
                  <div className="season">
                    <div className="season-name">❄️ Winter (Dec–Feb)</div>
                    <div className="season-desc">World-class skiing, Québec Winter Carnival, ice hockey, and northern lights viewing.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- 2. Getting Around ---- */}
            <div className="tip-card">
              <div className="tip-icon">✈️</div>
              <h3 className="tip-title">Getting Around Canada</h3>
              <div className="tip-content">
                <p>
                  Canada is enormous — the second-largest country on Earth. Plan
                  your transport carefully; distances between major cities are vast.
                </p>
                <ul>
                  <li><strong>Flying</strong> — the fastest option. Air Canada and WestJet connect all major cities.</li>
                  <li><strong>VIA Rail</strong> — the iconic Canadian train crosses the country in 4 days. A true bucket-list experience.</li>
                  <li><strong>Rental car</strong> — essential for national parks (Banff, Jasper, Cape Breton). Roads are excellent.</li>
                  <li><strong>Bus / Coach</strong> — Greyhound Canada and FlixBus cover many intercity routes affordably.</li>
                  <li><strong>City transit</strong> — Toronto, Vancouver, and Montréal have fast, reliable metro systems.</li>
                  <li><strong>Rideshare</strong> — Uber and Lyft operate in all major cities.</li>
                </ul>
              </div>
            </div>

            {/* ---- 3. Budget & Money ---- */}
            <div className="tip-card">
              <div className="tip-icon">💰</div>
              <h3 className="tip-title">Budget &amp; Money</h3>
              <div className="tip-content">
                <p>
                  Canada suits a wide range of budgets. All amounts below are in
                  Canadian dollars (CAD).
                </p>
                <ul>
                  <li><strong>Budget (backpacker):</strong> ~$80–$120/day — hostels, self-catering, free attractions.</li>
                  <li><strong>Mid-range:</strong> ~$200–$350/day — hotels, restaurants, paid tours.</li>
                  <li><strong>Luxury:</strong> $500+/day — boutique stays, fine dining, guided excursions.</li>
                  <li><strong>Tipping:</strong> 15–20% at restaurants; 10–15% for taxis and hair salons.</li>
                  <li><strong>Tax:</strong> HST/GST (5–15% by province) is added at the till — not included in displayed prices.</li>
                  <li><strong>Cards:</strong> Visa and Mastercard accepted almost everywhere; cash is rarely needed.</li>
                </ul>
              </div>
            </div>

            {/* ---- 4. Weather & Packing ---- */}
            <div className="tip-card">
              <div className="tip-icon">🎒</div>
              <h3 className="tip-title">Weather &amp; Packing</h3>
              <div className="tip-content">
                <p>
                  Canada's climate varies dramatically — coastal Vancouver is mild
                  and rainy, while the prairies see extreme heat in summer and
                  brutal cold in winter. Always layer.
                </p>
                <ul>
                  <li><strong>Summer:</strong> Light clothing plus a rain jacket. Mountain evenings can be cool — pack a fleece.</li>
                  <li><strong>Fall:</strong> Layers are key — fleece, waterproof jacket, ankle boots, and a light scarf.</li>
                  <li><strong>Winter:</strong> Invest in a quality insulated parka, thermal base layers, waterproof boots, hat, and gloves. Temperatures can drop below −30°C on the prairies.</li>
                  <li><strong>Bug spray:</strong> A must in summer, especially in national parks and near lakes.</li>
                  <li><strong>Sunscreen:</strong> UV is intense at high altitude and on open water, even on cloudy days.</li>
                  <li><strong>Power adapter:</strong> Canada uses Type A/B plugs (same as the USA) at 120 V / 60 Hz.</li>
                </ul>
              </div>
            </div>

            {/* ---- 5. Entry Requirements (full-width) ---- */}
            <div className="tip-card full-width">
              <div className="tip-icon">🛂</div>
              <h3 className="tip-title">Entry Requirements</h3>
              <div className="tip-content">
                <p>
                  Entry rules depend entirely on your nationality. Always verify
                  the latest requirements on the official{' '}
                  <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--red)', fontWeight: 600 }}
                  >
                    Government of Canada website
                  </a>{' '}
                  before you travel.
                </p>
                <ul>
                  <li><strong>Passport:</strong> A valid passport is required for all foreign nationals entering Canada.</li>
                  <li><strong>eTA (Electronic Travel Authorization):</strong> Visa-exempt travellers (UK, EU, Australia, Japan etc.) flying to Canada must get an eTA before departure. Apply at canada.ca — costs CAD $7, usually approved within minutes.</li>
                  <li><strong>Visitor visa (TRV):</strong> Citizens of many other countries need a Temporary Resident Visa. Apply through IRCC online well in advance.</li>
                  <li><strong>USA border crossing:</strong> US citizens can enter with a passport or NEXUS card. A Passport Card is accepted at land and sea crossings.</li>
                  <li><strong>Customs allowances:</strong> Duty-free: 1.14 L of spirits or 1.5 L of wine, 200 cigarettes, and gifts worth up to CAD $60.</li>
                  <li><strong>Currency declaration:</strong> You must declare cash or monetary instruments of CAD $10,000 or more when crossing the border.</li>
                </ul>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
