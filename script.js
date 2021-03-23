/* Dá um alerta quando aperta o botão Entrar */
const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});

const genderOption = document.querySelector('.gender-section');
const newInput = document.querySelector('#gender-custom');
genderOption.addEventListener('click', (event) => {
  const evento = event.target;
  if (evento.id === 'custom') {
    newInput.style.display = 'block';
  } else {
    newInput.style.display = 'none';
  }
});
