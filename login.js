document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
      }
    });
  }

  // Tabs
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const panelLogin = document.getElementById("login-form");
  const panelSignup = document.getElementById("signup-form");

  function activateTab(tab) {
    const isLogin = tab === "login";

    tabLogin.classList.toggle("active", isLogin);
    tabSignup.classList.toggle("active", !isLogin);

    tabLogin.setAttribute("aria-selected", isLogin.toString());
    tabSignup.setAttribute("aria-selected", (!isLogin).toString());

    panelLogin.classList.toggle("active", isLogin);
    panelSignup.classList.toggle("active", !isLogin);
  }

  if (tabLogin && tabSignup && panelLogin && panelSignup) {
    tabLogin.addEventListener("click", () => activateTab("login"));
    tabSignup.addEventListener("click", () => activateTab("signup"));
  }

  // Email regex
  const emailPattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

  // LOGIN FORM
  const loginForm = document.getElementById("login-form");
  const loginEmail = document.getElementById("login-email");
  const loginPassword = document.getElementById("login-password");
  const loginStatus = document.getElementById("login-status");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      loginStatus.textContent = "";
      loginStatus.classList.remove("login-status-success", "login-status-error");

      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();

      if (!email || !password) {
        loginStatus.textContent = "Please enter both email and password.";
        loginStatus.classList.add("login-status-error");
        return;
      }

      if (!emailPattern.test(email)) {
        loginStatus.textContent = "Please enter a valid email address.";
        loginStatus.classList.add("login-status-error");
        return;
      }

      if (password.length < 8) {
        loginStatus.textContent = "Password must be at least 8 characters long.";
        loginStatus.classList.add("login-status-error");
        return;
      }

      loginStatus.textContent = "Checking your credentials...";
      loginStatus.classList.add("login-status-success");

      setTimeout(() => {
        // Replace with real authentication
        loginStatus.textContent = "Login successful. Redirecting to dashboard...";
        loginStatus.classList.add("login-status-success");
        // window.location.href = "/dashboard.html";
      }, 900);
    });
  }

  // SIGNUP FORM
  const signupForm = document.getElementById("signup-form");
  const signupName = document.getElementById("signup-name");
  const signupEmail = document.getElementById("signup-email");
  const signupPhone = document.getElementById("signup-phone");
  const signupPassword = document.getElementById("signup-password");
  const signupConfirm = document.getElementById("signup-confirm-password");
  const signupStatus = document.getElementById("signup-status");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      signupStatus.textContent = "";
      signupStatus.classList.remove("login-status-success", "login-status-error");

      const name = signupName.value.trim();
      const email = signupEmail.value.trim();
      const phone = signupPhone.value.trim();
      const password = signupPassword.value.trim();
      const confirmPassword = signupConfirm.value.trim();

      if (!name || !email || !password || !confirmPassword) {
        signupStatus.textContent = "Please fill in all required fields.";
        signupStatus.classList.add("login-status-error");
        return;
      }

      if (!emailPattern.test(email)) {
        signupStatus.textContent = "Please enter a valid email address.";
        signupStatus.classList.add("login-status-error");
        return;
      }

      if (password.length < 8) {
        signupStatus.textContent = "Password must be at least 8 characters long.";
        signupStatus.classList.add("login-status-error");
        return;
      }

      if (password !== confirmPassword) {
        signupStatus.textContent = "Passwords do not match.";
        signupStatus.classList.add("login-status-error");
        return;
      }

      if (phone && phone.length < 8) {
        signupStatus.textContent = "Please enter a valid phone number.";
        signupStatus.classList.add("login-status-error");
        return;
      }

      signupStatus.textContent = "Submitting your partner request...";
      signupStatus.classList.add("login-status-success");

      setTimeout(() => {
        // Replace with real signup API
        signupStatus.textContent =
          "Thank you. Your request has been submitted. Our team will contact you shortly.";
        signupStatus.classList.add("login-status-success");
        // signupForm.reset();
      }, 1100);
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  function handleScrollReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", handleScrollReveal);
  handleScrollReveal();
});
