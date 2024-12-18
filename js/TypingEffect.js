document.addEventListener('DOMContentLoaded', function () {
  const name = 'Hi, Im ADITI CHIKKALI'; // Text to type
  let i = 0;
  const speed = 100; // Typing speed in milliseconds

  function typeEffect() {
    if (i < name.length) {
      document.getElementById('name').innerHTML += name.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    } else {
      // Reset after completion
      setTimeout(() => {
        document.getElementById('name').innerHTML = ''; // Clear the text
        i = 0; // Reset index
        typeEffect(); // Restart the typing effect
      }, 1000); // Pause for 1 second before restarting
    }
  }

  typeEffect(); // Start the typing effect
});
