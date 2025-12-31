/* Navigation */
function goToMemories() {
  location.href = "memories.html";
}
function goToMessage() {
  location.href = "message.html";
}
function goToProposal() {
  location.href = "proposal.html";
}

/* ❤️ Heart rain */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

/* 🎉 Confetti */
function confettiBlast() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "%";
    c.style.background =
      ["#ff4d88", "#ffd700", "#ff9a9e", "#b5fffc"][
        Math.floor(Math.random() * 4)
      ];
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* 💍 YES click */
function yesClicked() {
  confettiBlast();
  setTimeout(() => {
    document.getElementById("surprise").style.display = "flex";
  }, 600);
}
