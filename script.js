/* Dá um alerta quando aperta o botão Entrar */
const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});

/* Cria um novo input para a opção de gênero Personalizado */
const formContaNova = document.querySelector('.form-right-content');
const personalizado = document.querySelector('#custom');

function generoCustom() {
  personalizado.addEventListener('click', () => {
    const customInput = document.createElement('input');
    customInput.name = 'gender-custom';
    customInput.placeholder = 'Gênero (opcional)';
    formContaNova.appendChild(customInput);
  });
}
generoCustom();

function check() {
  const input = document.querySelectorAll('.required');
  let notValid = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') { notValid = true; }
  }
  return notValid;
}

function checkRadio() {
  const input = document.querySelectorAll('.rdBtn');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].checked) { return false; }
  }
  return true;
}
// const submitBtn = document.querySelector('#facebook-register');
// submitBtn.addEventListener('click', () => {

// });
const form = document.querySelector('.form-right-content');
form.addEventListener('submit', (event) => {
  if (check() || checkRadio()) {
    alert('Campos inválidos');
    event.preventDefault();
  }
});
