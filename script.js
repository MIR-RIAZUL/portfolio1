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
