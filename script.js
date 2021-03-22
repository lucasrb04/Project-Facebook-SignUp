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
