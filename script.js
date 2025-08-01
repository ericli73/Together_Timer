const startDate = new Date("2025-07-18T23:00:00");

const audio = document.getElementById("myAudio");
const toggleBtn = document.getElementById("audioToggle");

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.src = "pause.png";
  } else {
    audio.pause();
    toggleBtn.src = "play.png";
  }
});

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatted = `${days} Days, \n${hours} Hrs, \n${minutes} Min, \n${seconds} Sec`;
  document.getElementById("timer").textContent = formatted;
}

const text = "Dear Leah, \n\nHappy Girlfriends Day! \nThank you so much for everything! \n\nYou have truly changed my life: \nYou make me feel loved; \nYour ambition inspires me; \nYour dedication pushes me to grow. \n\nWith you, I feel at ease: \nI don't need a social battery; \nI can make jokes freely; \nSilence never feels awkward. \n\nWords can’t express how grateful I am! \nI can’t wait to see you again! \nHere’s to more firsts together! \n\nLove, Eric";
const speed = 50;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

setInterval(updateTimer, 1000);
updateTimer();
