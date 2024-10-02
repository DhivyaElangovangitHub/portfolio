
document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill out all fields.');
  } 
  else {
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }
});
