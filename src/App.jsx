import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Home        from './pages/Home'
import Destinations from './pages/Destinations'
import Tips        from './pages/Tips'
import Contact     from './pages/Contact'

/*
 * HashRouter is used instead of BrowserRouter so that the site
 * works on GitHub Pages without any server configuration.
 * URLs look like: https://msonani.github.io/travel-canada/#/destinations
 */
export default function App() {
  return (
    <HashRouter>
      {/* Navbar and Footer appear on every page */}
      <Navbar />

      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tips"         element={<Tips />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}
