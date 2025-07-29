const startDate = new Date("2025-07-18T23:00:00"); // Replace with your date

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatted = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
  document.getElementById("timer").textContent = formatted;
}

setInterval(updateTimer, 1000);
updateTimer();
