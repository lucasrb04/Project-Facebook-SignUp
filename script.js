/* Dá um alerta quando aperta o botão Entrar */
const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});

/* Cria um novo input para a opção de gênero Personalizado */
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

function check() {
  const input = document.querySelectorAll('.required');
  let notValid = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      notValid = true;
    }
  }
  return notValid;
}

function checkRadio() {
  const input = document.querySelectorAll('.rdBtn');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].checked) {
      return false;
    }
  }
  return true;
}

const form = document.querySelector('.form-right-content');
form.addEventListener('submit', (event) => {
  if (check() || checkRadio()) {
    document.querySelector('#invalid-message').innerHTML = 'Campos inválidos';
    event.preventDefault();
  }
});
