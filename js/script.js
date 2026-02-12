// =========================
// Theme (Light/Dark) Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Read theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";

  // Apply theme to body
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  // Update toggle buttons
  updateToggleButton();
});

function toggleDarkMode() {
  const isLight = document.body.classList.contains("light");

  if (isLight) {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }

  updateToggleButton();
}

// Optional: update toggle icon text
function updateToggleButton() {
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  toggleBtns.forEach(btn => {
    btn.textContent = document.body.classList.contains("light") ? "dark_mode" : "light_mode";
  });
}

// =========================
// Hamburger Menu Toggle
// =========================
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}
