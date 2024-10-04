document.addEventListener('DOMContentLoaded', function () {
  const name = 'Hi, Im ADITI CHIKKALI';
  let i = 0;
  const speed = 100; // Typing speed in milliseconds

  function typeEffect() {
    if (i < name.length) {
      document.getElementById('name').innerHTML += name.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect(); // Start the typing effect
});
