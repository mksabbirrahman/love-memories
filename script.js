/* Unlock */
function unlock() {
  const name = document.getElementById("soul").value.toLowerCase().trim();
  if (name === "mahmuda jannat") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("world").classList.remove("hidden");
    type();
  } else {
    alert("The universe doesn’t recognize you.");
  }
}

/* Typewriter */
const words = [
  "Some bonds aren’t built.",
  "They awaken.",
  "This is ours."
];
let i = 0, j = 0;

function type() {
  if (i < words.length) {
    if (j < words[i].length) {
      document.getElementById("type").innerHTML += words[i][j++];
      setTimeout(type, 70);
    } else {
      document.getElementById("type").innerHTML += "<br>";
      i++; j = 0;
      setTimeout(type, 600);
    }
  }
}

/* Proposal fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function propose() {
  alert("Then forever begins ❤️");
  for (let k = 0; k < 80; k++) {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 3, 0, Math.PI*2);
    ctx.fill();
  }
}

/* Candle mode */
function toggleCandle() {
  document.body.classList.toggle("candle");
}
