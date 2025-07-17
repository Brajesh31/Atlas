document.addEventListener('DOMContentLoaded', event => {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const errorMessage = emailInput.nextElementSibling;

  const validateEmail = email => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const showError = message => {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    emailInput.classList.add('invalid');
  };

  const hideError = () => {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('invalid');
  };

  const showToast = (message, type) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'center',
      className: type,
    }).showToast();
  };

  emailInput.addEventListener('input', e => {
    if (emailInput.value.trim() === '') {
      hideError();
    } else if (!validateEmail(emailInput.value)) {
      showError('Please enter a valid email address');
    } else {
      hideError();
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
      showToast('Thank you for subscribing!', 'success');
      form.reset();
      hideError();
    } else {
      showToast('Please enter a valid email address', 'error');
      showError('Please enter a valid email address');
    }
  });
});
