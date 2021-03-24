/* Dá um alerta quando aperta o botão Entrar */
const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});

/* Cria um novo input para a opção de gênero Personalizado */
const inputsRadio = document.querySelectorAll('.input-radio');
const genderOption = document.querySelector('.gender-section');
const newInput = document.querySelector('#gender-custom');
genderOption.addEventListener('click', (event) => {
  const evento = event.target;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    inputsRadio[index].classList.remove('selected');
  }
  evento.classList.add('selected');
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

const containerDireita = document.querySelector('.section-right-content');
const conteudoDIreita = document.querySelector('.right-content');
const form = document.querySelector('.form-right-content');
const inputsForm = form.querySelectorAll('.input-class');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const radioSelected = document.querySelector('.selected');
  if (check() || checkRadio()) {
    document.querySelector('#invalid-message').innerHTML = 'Campos inválidos';
  } else {
    conteudoDIreita.style.display = 'none';
    const criaTagP = document.createElement('p');
    criaTagP.innerHTML = 'Olá';
    for (let index = 0; index < inputsForm.length; index += 1) {
      criaTagP.innerHTML += ` ${inputsForm[index].value}`;
    }
    criaTagP.innerHTML += ` ${radioSelected.value}`;
    containerDireita.appendChild(criaTagP);
  }
});
