// TYPEWRITER EFFECT

const texts = ["Web Developer", "Designer", "Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typewriter").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}
type();



// Scroll Reveal Animations


window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add("active");
      }
    });
  });
  







