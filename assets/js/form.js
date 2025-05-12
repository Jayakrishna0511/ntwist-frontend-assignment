let startTime;
const form = document.getElementById('contactForm');
const timeDisplay = document.getElementById('timeSpent');
const confirmation = document.getElementById('confirmation');

form.addEventListener('focusin', () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const endTime = new Date();
  const timeSpent = Math.floor((endTime - startTime) / 1000);
  timeDisplay.textContent = `Time Spent: ${timeSpent} seconds`;

  confirmation.hidden = false;
  form.reset();
  startTime = null;
});
