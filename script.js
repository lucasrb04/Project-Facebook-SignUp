const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});
