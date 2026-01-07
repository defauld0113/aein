// =============================
// 1. MOBILE NAVIGATION TOGGLE
// =============================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav when clicking a link on mobile
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

// =============================
// 2. SMOOTH SCROLL FOR LINKS
// =============================
// All links with class .js-scroll will scroll smoothly to target section
document.querySelectorAll(".js-scroll").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// =============================
// 3. BOOKING FORM HANDLER (FRONTEND DEMO ONLY)
// =============================
const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookingStatus.textContent = "Submitting your request...";
    bookingStatus.style.color = "#2563eb";

    // Simulate async request
    setTimeout(() => {
      bookingStatus.textContent =
        "Thank you! Our team will contact you shortly to confirm your trip.";
      bookingStatus.style.color = "#16a34a";
      bookingForm.reset();
    }, 900);
  });
}

// =============================
// 4. LOGIN FORM HANDLER (DEMO)
// =============================
const loginForm = document.getElementById("login-form");
const loginStatus = document.getElementById("login-status");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginStatus.textContent = "Checking credentials (demo only)...";
    loginStatus.style.color = "#2563eb";

    setTimeout(() => {
      loginStatus.textContent =
        "Demo login only. Connect to your backend to enable real access.";
      loginStatus.style.color = "#f97316";
      loginForm.reset();
    }, 800);
  });
}

// =============================
// 5. SCROLL REVEAL FOR SECTIONS
// =============================
const revealSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach((sec) => observer.observe(sec));

// =============================
// 6. FOOTER YEAR
// =============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// =============================
// 9. PACKAGES CARD CLICK HANDLER
// - Detects which package card was clicked
// - For now: logs to console; later: open modal / navigate
// =============================
const packageCards = document.querySelectorAll(".package-card");

packageCards.forEach((card) => {
  card.addEventListener("click", () => {
    const packageId = card.getAttribute("data-package");
    console.log("Package clicked:", packageId);

    // Example future behavior:
    // openPackageModal(packageId);
    // or window.location.href = `package-${packageId}.html`;
  });
});

// Optional: keep button click inside card using same handler
document.querySelectorAll(".package-link").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent double handling
    const card = btn.closest(".package-card");
    if (!card) return;
    const packageId = card.getAttribute("data-package");
    console.log("Package details button clicked:", packageId);
  });
});
// =============================
// ADVANCED CONTACT FORM HANDLER
// - Frontend-only status message
// =============================
const advContactForm = document.getElementById("contact-form");
const advContactStatus = document.getElementById("contact-status");

if (advContactForm && advContactStatus) {
  advContactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    advContactStatus.textContent = "Sending your enquiry...";
    advContactStatus.style.color = "#2563eb";

    // Simulated async send; connect to backend later
    setTimeout(() => {
      advContactStatus.textContent =
        "Thank you! Your enquiry has been received. Our team will contact you shortly via phone or WhatsApp.";
      advContactStatus.style.color = "#16a34a";
      advContactForm.reset();
    }, 1000);
  });
}
