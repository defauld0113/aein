// Footer year
const yearSpanPayment = document.getElementById("year");
if (yearSpanPayment) {
  yearSpanPayment.textContent = new Date().getFullYear();
}

// Payment pill selection UI
const paymentPillInputs = document.querySelectorAll(".payment-pill input");

paymentPillInputs.forEach((radio) => {
  radio.addEventListener("change", () => {
    document
      .querySelectorAll(".payment-pill")
      .forEach((p) => p.classList.remove("selected"));
    const parent = radio.closest(".payment-pill");
    if (parent) parent.classList.add("selected");
  });
});

const paymentForm = document.getElementById("payment-form");
const paymentStatus = document.getElementById("payment-status");

if (paymentForm && paymentStatus) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedMethod = document.querySelector(
      'input[name="pay-method"]:checked'
    );

    if (!selectedMethod) {
      paymentStatus.textContent = "Please select your preferred payment method.";
      paymentStatus.style.color = "#b91c1c";
      return;
    }

    paymentStatus.textContent = "Saving your payment preference...";
    paymentStatus.style.color = "#16a34a";

    // Frontend-only simulation; later you can send to backend here
    setTimeout(() => {
      paymentStatus.textContent =
        "Thank you! Your payment preference has been saved. Our team will contact you with final amount and secure payment instructions.";
      paymentStatus.style.color = "#16a34a";
      paymentForm.reset();
      document
        .querySelectorAll(".payment-pill")
        .forEach((p) => p.classList.remove("selected"));
    }, 900);
  });
}
