const form = document.querySelector('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `Name: ${fname.value}<br> Email:${email.value} <br> Message: ${message.value}`;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'portfoliowebsite26@gmail.com',
    Password: '8D21FA5E3805B0A0AAE70B01959E8ECF6525',
    To: 'portfoliowebsite26@gmail.com',
    From: 'portfoliowebsite26@gmail.com',
    Subject: 'Message from Portfolio Website',
    Body: bodyMessage,
  }).then((message) => {
    // Show success popup
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Message sent successfully!',
    });
    // Reset the form
    form.reset();
  });
}

function validateForm() {
  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fname.value.trim() === '' || message.value.trim() === '') {
    // Show error popup for empty fields
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all fields.',
    });
    return false;
  }

  if (!emailPattern.test(email.value.trim())) {
    // Show error popup for invalid email
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a valid email address.',
    });
    return false;
  }

  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    sendEmail();
  }
});
