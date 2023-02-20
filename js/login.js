const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if(target.value.length > 1) {
        button.removeAttribute('disabled');
        return
    }
        button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
event.preventDefault(); //Bloqueia a ação de recarregar página

localStorage.setItem('player', input.value)
window.location = 'game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);