const emailjs = require('emailjs-com')

const submitForm = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_9xpakgc', 'template_x4pbk2q', 'contact-form', 'user_BgZ9K3DA9DRPFu9IyvGIJ')
  .then(result => alert('Your message have been sent. Thank you'))
  .catch(err => alert('Ooop!, Please try again'))
}

 document.getElementById('submitButton').addEventListener('click', submitForm)
