import { useEffect, useState } from 'react'

/*
 * Contact page with front-end-only form validation.
 *
 * React concepts used here:
 *  - useState: stores form field values, error messages, and success state
 *  - Controlled inputs: every input's value comes from React state so we
 *    always know what the user has typed
 *  - Event handling: onChange keeps state in sync; onSubmit validates and
 *    either shows errors or shows the success banner
 */
export default function Contact() {
  // One state object holds all form field values
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  })

  // One state object holds error messages (empty string = no error)
  const [errors, setErrors] = useState({})

  // Controls whether the green success banner is shown
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.title = 'Contact – Travel Canada'
  }, [])

  /* --- Validation: returns an object of field → error message --- */
  function validate() {
    const e = {}
    if (!form.name.trim())
      e.name = 'Please enter your name.'
    if (!form.email.trim())
      e.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address.'
    if (!form.message.trim())
      e.message = 'Please write a message.'
    else if (form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.'
    return e
  }

  /* --- Update a single field and clear its error as the user types --- */
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Remove the error for this field once the user starts correcting it
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  /* --- Submit handler --- */
  function handleSubmit(e) {
    e.preventDefault() // stop the browser from navigating

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors) // show all errors
      return
    }

    // All valid: reset the form and show success banner
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setSuccess(true)
    // Auto-hide after 6 seconds
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <>
      <header className="page-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </header>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">

            {/* ---- Left: contact details ---- */}
            <div className="contact-info">
              <h2>Plan Your Canadian Adventure</h2>
              <p>
                Have a question about a destination? Need help planning an
                itinerary? Want to share a story from your trip? Fill in the
                form and we'll get back to you within 24–48 hours.
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <p>hello@travelcanada.ca</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <h4>Based in</h4>
                  <p>Canada 🇨🇦</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">⏰</div>
                <div className="contact-detail-text">
                  <h4>Response time</h4>
                  <p>Usually within 24–48 hours</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">🐦</div>
                <div className="contact-detail-text">
                  <h4>Twitter / X</h4>
                  <p>@TravelCanada</p>
                </div>
              </div>
            </div>

            {/* ---- Right: form card ---- */}
            <div className="contact-form-card">

              {/* Success banner — only rendered when success is true */}
              {success && (
                <div className="form-success">
                  ✅ Thank you! Your message has been received. We'll be in touch soon.
                </div>
              )}

              {/*
                noValidate disables the browser's built-in validation bubbles
                so our custom error messages show instead.
              */}
              <form onSubmit={handleSubmit} noValidate>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="e.g. Alex Smith"
                    autoComplete="name"
                  />
                  {/* Only render the error element when there is a message */}
                  {errors.name && (
                    <span className="form-error" role="alert">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="e.g. alex@example.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error" role="alert">{errors.email}</span>
                  )}
                </div>

                {/* Topic (optional) */}
                <div className="form-group">
                  <label htmlFor="subject">Topic (optional)</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">— Choose a topic —</option>
                    <option value="destination">Destination question</option>
                    <option value="itinerary">Itinerary help</option>
                    <option value="tips">Travel tips</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">
                    Message <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your trip plans, or ask us anything about Canada…"
                  />
                  {errors.message && (
                    <span className="form-error" role="alert">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message →
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
