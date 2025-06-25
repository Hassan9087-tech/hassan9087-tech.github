// Typing effect for header text
const text = "Hi, I'm Hassan Shahzada";
const typingElement = document.querySelector(".typing");
let index = 0;
function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeText);
