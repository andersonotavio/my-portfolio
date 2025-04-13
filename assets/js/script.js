let buttonCv = document.querySelector(".button-cv");

function confettiEffect() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
buttonCv.addEventListener("click", confettiEffect)

AOS.init();