/* =======================================
   TRAVEL CANADA — Main JavaScript
   =======================================
   Sections:
   1. Hamburger menu (mobile nav)
   2. Active nav-link highlighting
   3. Scroll-reveal for cards & tips
   4. Hero subtle zoom on load
   5. Contact form validation
   ======================================= */


/* -----------------------------------------------
   1. Hamburger Menu
   Toggles the mobile nav open/closed when the
   hamburger button is clicked.
----------------------------------------------- */
(function () {
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');

  // Exit early if we are not on a page with a navbar
  if (!hamburger || !navMenu) return;

  // Toggle open state when the button is clicked
  hamburger.addEventListener('click', function () {
    var isOpen = hamburger.classList.toggle('open');
    navMenu.classList.toggle('open', isOpen);
    // Accessibility: tell screen readers whether the menu is open
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu when any nav link is tapped (useful on mobile)
  navMenu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close the menu when the user clicks anywhere outside the navbar
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* -----------------------------------------------
   2. Active Nav-Link Highlighting
   Compares the current page filename to each
   nav link's href and adds the .active class.
----------------------------------------------- */
(function () {
  // Get just the filename, e.g. "destinations.html"
  // pathname.split('/').pop() handles both "/" and "/index.html"
  var page = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


/* -----------------------------------------------
   3. Scroll-Reveal Animation
   Uses IntersectionObserver to detect when cards
   or tip-cards enter the viewport, then adds
   .visible which triggers the CSS fade-in.
   Items are staggered so they appear one by one.
----------------------------------------------- */
(function () {
  // Select all elements we want to animate in
  var items = document.querySelectorAll('.card, .tip-card, .feature-item');
  if (!items.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          // Stagger: each item appears 80ms after the previous one
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, index * 80);
          // Stop watching this element once it has appeared
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,          // trigger when 10% of the element is visible
      rootMargin: '0px 0px -40px 0px' // trigger slightly before the bottom edge
    }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();


/* -----------------------------------------------
   4. Hero Zoom-Out on Load
   The hero background starts scaled to 1.05×
   in CSS. Adding .loaded triggers the 8-second
   transition back to scale(1) — a subtle Ken
   Burns effect.
----------------------------------------------- */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  // Use requestAnimationFrame so the transition fires after
  // the browser has painted the initial scaled state
  requestAnimationFrame(function () {
    hero.classList.add('loaded');
  });
})();


/* -----------------------------------------------
   5. Contact Form Validation
   Pure front-end validation — no data is sent
   anywhere. Checks for:
     • Non-empty name
     • Non-empty + valid-format email
     • Non-empty message (min 10 characters)
   Shows inline error messages and a success banner.
----------------------------------------------- */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return; // only runs on contact.html

  /* --- Helper: mark a field as invalid and show its message --- */
  function showError(input, message) {
    input.classList.add('error');
    var errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
    }
  }

  /* --- Helper: clear the error state for a field --- */
  function clearError(input) {
    input.classList.remove('error');
    var errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) errorEl.classList.remove('show');
  }

  /* --- Simple email format check (user@domain.tld) --- */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  // Clear errors in real-time as the user types
  form.querySelectorAll('input, textarea').forEach(function (field) {
    field.addEventListener('input', function () {
      clearError(field);
    });
  });

  // Run validation when the form is submitted
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop the browser from navigating away

    var nameInput    = document.getElementById('name');
    var emailInput   = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var successBox   = document.getElementById('form-success');
    var valid        = true;

    // --- Validate name ---
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name.');
      valid = false;
    } else {
      clearError(nameInput);
    }

    // --- Validate email ---
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput);
    }

    // --- Validate message ---
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please write a message.');
      valid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError(messageInput);
    }

    // --- All valid: reset the form and show the success banner ---
    if (valid && successBox) {
      form.reset();
      successBox.classList.add('show');

      // Smoothly scroll the success banner into view
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Auto-hide the banner after 6 seconds
      setTimeout(function () {
        successBox.classList.remove('show');
      }, 6000);
    }
  });
})();
