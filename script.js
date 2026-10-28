// script.js - Simple Interactive Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Greeting based on time of day
  const greetingEl = document.getElementById("greetingTitle");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greetingText = "Welcome to My Project!";
    if (hour < 12) {
      greetingText = "Good Morning! Welcome to My Project";
    } else if (hour < 18) {
      greetingText = "Good Afternoon! Welcome to My Project";
    } else {
      greetingText = "Good Evening! Welcome to My Project";
    }
    greetingEl.textContent = greetingText;
  }

  // 2. Interactive Counter
  const likeBtn = document.getElementById("likeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const likeCountEl = document.getElementById("likeCount");
  let count = 0;

  if (likeBtn && likeCountEl) {
    likeBtn.addEventListener("click", () => {
      count++;
      likeCountEl.textContent = count;
      likeBtn.style.transform = "scale(1.05)";
      setTimeout(() => {
        likeBtn.style.transform = "none";
      }, 150);
    });
  }

  if (resetBtn && likeCountEl) {
    resetBtn.addEventListener("click", () => {
      count = 0;
      likeCountEl.textContent = count;
    });
  }

  // 3. Dark/Light Theme Toggle with LocalStorage
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Check saved theme preference
  const savedTheme = localStorage.getItem("preferred-theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.textContent = "☀️";
  }

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        themeIcon.textContent = "🌙";
        localStorage.setItem("preferred-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.textContent = "☀️";
        localStorage.setItem("preferred-theme", "dark");
      }
    });
  }

  console.log("%c[SOP Check] Website initialized cleanly. Ready for Vercel deployment!", "color: #10b981; font-weight: bold; font-size: 13px;");
});
