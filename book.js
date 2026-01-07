// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const form = document.getElementById("booking-form");
const statusEl = document.getElementById("booking-status");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Read values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const nights = document.getElementById("nights").value;
    const guests = document.getElementById("guests").value;
    const tripType = document.getElementById("trip-type").value;
    const agree = document.getElementById("agree").checked;

    // Basic validation for required fields
    if (
      !name ||
      !email ||
      !phone ||
      !destination ||
      !date ||
      !nights ||
      !guests ||
      !tripType
    ) {
      statusEl.textContent = "Please fill in all required fields before continuing.";
      statusEl.style.color = "#b91c1c";
      return;
    }

    if (!agree) {
      statusEl.textContent =
        "Please tick the consent checkbox to allow us to contact you.";
      statusEl.style.color = "#b91c1c";
      return;
    }

    // If everything is valid, show message then redirect
    statusEl.textContent = "Saving your booking request...";
    statusEl.style.color = "#16a34a";

    // Simulate a short delay, then go to payments page
    setTimeout(() => {
      // Later you can send these form values to your backend here
      window.location.href = "payments.html";
    }, 900);
  });
}
// Footer year
const yearSpanBooking = document.getElementById("year");
if (yearSpanBooking) {
  yearSpanBooking.textContent = new Date().getFullYear();
}

const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");

if (bookingForm && bookingStatus) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const nights = document.getElementById("nights").value;
    const guests = document.getElementById("guests").value;
    const tripType = document.getElementById("trip-type").value;
    const agree = document.getElementById("agree").checked;

    if (
      !name ||
      !email ||
      !phone ||
      !destination ||
      !date ||
      !nights ||
      !guests ||
      !tripType
    ) {
      bookingStatus.textContent = "Please fill in all required fields before continuing.";
      bookingStatus.style.color = "#b91c1c";
      return;
    }

    if (!agree) {
      bookingStatus.textContent =
        "Please tick the consent checkbox to allow us to contact you.";
      bookingStatus.style.color = "#b91c1c";
      return;
    }

    bookingStatus.textContent = "Saving your booking request...";
    bookingStatus.style.color = "#16a34a";

    // Simulate short delay then redirect to payments page
    setTimeout(() => {
      // Later: send data to backend here
      window.location.href = "payments.html";
    }, 900);
  });
}
