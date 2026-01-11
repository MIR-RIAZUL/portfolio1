/* Typing Effect */
const text = "Computer Science Student | Web Developer | Programmer";
let index = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 90);
  }
}
typeEffect();

/* Scroll Animations */
const animatedElements = document.querySelectorAll(".animate, .stagger");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));
