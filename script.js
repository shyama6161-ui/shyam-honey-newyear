function show() {
  document.querySelector('.card').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}
function start() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
  typeText();
  startHearts();
}

const text = [
  "Heyy honeyammaaaaa 😁",
  "2025 is sooo gooddd...",
  "Best year of my life...",
  "Because I got YOU ❤️",
  "2026 is ours...",
  "We’ll grow together 💕"
];

let i = 0;
let j = 0;

function typeText() {
  if (i < text.length) {
    if (j < text[i].length) {
      document.getElementById("type").innerHTML += text[i][j];
      j++;
      setTimeout(typeText, 60);
    } else {
      document.getElementById("type").innerHTML += "<br><br>";
      j = 0;
      i++;
      setTimeout(typeText, 500);
    }
  }
}

/* Floating hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}