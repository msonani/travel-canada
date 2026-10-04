import { Link } from 'react-router-dom'

/* Shared footer — rendered on every page via App.jsx */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>🍁 Travel Canada</h3>
          <p>
            Your guide to exploring the True North, Strong and Free.
            Discover destinations, plan your itinerary, and make lifelong memories.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {/* Link is like <a> but handles client-side navigation */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/tips">Travel Tips</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact-info">
          <h4>Connect</h4>
          <p>📧 hello@travelcanada.ca</p>
          <p>📍 Canada 🇨🇦</p>
          <p>🐦 @TravelCanada</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Travel Canada. Built with ❤️ for the True North.</p>
      </div>
    </footer>
  )
}
