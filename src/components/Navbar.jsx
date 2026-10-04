import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

/*
 * Shared navigation bar.
 *
 * React concepts used here:
 *  - useState:  tracks whether the mobile menu is open or closed
 *  - useEffect: adds a document-level click listener to close the
 *               menu when the user clicks outside the navbar
 *  - NavLink:   like <Link> but automatically adds an "active" class
 *               when its route matches the current URL
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the menu when the user clicks anywhere outside the navbar
  useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest('.navbar')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    // Cleanup: remove listener when the component unmounts
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  // Builds the className string for each nav link.
  // React Router passes { isActive } so we can highlight the current page.
  function linkClass({ isActive }) {
    return `nav-link${isActive ? ' active' : ''}`
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <span className="maple-leaf">🍁</span> Travel Canada
        </NavLink>

        {/* Hamburger button — visible on mobile only (CSS hides it on desktop) */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        {/* Nav links — dropdown on mobile, inline on desktop */}
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li>
            <NavLink to="/" className={linkClass} end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destinations" className={linkClass} onClick={closeMenu}>
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink to="/tips" className={linkClass} onClick={closeMenu}>
              Travel Tips
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}
