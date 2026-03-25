let buttonCv = document.querySelector(".button-cv");

function confettiEffect() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
if (buttonCv) {
  buttonCv.addEventListener("click", confettiEffect);
}

// Theme toggle (light/dark) usando data-theme="dark" no <html>
const themeToggleBtn = document.querySelector(".theme-toggle");

function setTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }
}

function getInitialTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    // Alguns ambientes bloqueiam localStorage; seguimos com o prefers-color-scheme.
  }
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

if (themeToggleBtn) {
  setTheme(getInitialTheme());

  themeToggleBtn.addEventListener("click", () => {
    const isDarkNow = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDarkNow ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      // Ignora persistência se localStorage estiver indisponível.
    }
  });
} else {
  // Se por algum motivo não existir o botão, ainda assim respeita a preferência do SO
  setTheme(getInitialTheme());
}

AOS.init();