
document.querySelector('#form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_61h9onf', '#form', 'tUVE9fWx6vdbd3zpN')
    .then(function() {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message. Error: ' + JSON.stringify(error));
    });
});