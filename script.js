/* Typewriter intro */
const introText = [
  "কিছু ভালোবাসা শব্দে ভরা।",
  "কিছু ভালোবাসা নীরব।",
  "আমাদেরটা থাকতে জানে।"
];

let i = 0, j = 0;
function typeIntro() {
  if (i < introText.length) {
    if (j < introText[i].length) {
      document.getElementById("intro").innerHTML += introText[i][j++];
      setTimeout(typeIntro, 70);
    } else {
      document.getElementById("intro").innerHTML += "<br>";
      i++; j = 0;
      setTimeout(typeIntro, 600);
    }
  }
}
typeIntro();

/* Scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".chapter").forEach(sec => observer.observe(sec));

/* Proposal response */
function accept() {
  document.getElementById("answer").innerText =
    "তাহলে যা-ই আসুক… আমরা একসাথে সামলাবো।";
}
