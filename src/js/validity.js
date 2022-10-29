export function validation(input) {
    const typeSetInput = input.dataset.type;
    if (validators[typeSetInput]) {
        validators[typeSetInput](input)
    }
}

const validators = {
    password: (input) => passwordValidator(input),
    name: (input) => nameOrLastNameValidator(input),
    lastName: (input) => nameOrLastNameValidator(input),
    email: (input) => emailValidator(input),
    fone: (input) => foneValidator(input)
}

function passwordValidator(input){
    const pass = input.value;
    const regexPassword = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g
    const result = regexPassword.test(pass);
    const message = (result) ? '' : 'A senha precisa conter pelo menos 8 caracteres. Emtre eles, letras maiúsculas e minúsculas, números e caractere especial como "." por exemplo'

    const messageValidaton = input.setCustomValidity(message);

    return messageValidaton;
}

function nameOrLastNameValidator(input) {
    const name = input.value;
    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}$/
    const result = regexName.test(name);
    const message = (result) ? '' : 'Este campo deve conter ao menos 2 caracteres e aceita apenas letras e suas respectivas ecentuações'

    const messageValidaton = input.setCustomValidity(message);

    return messageValidaton;
}

function emailValidator(input) {
    const email = input.value;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = regexEmail.test(email);
    const message = (result) ? '' : 'O email necessita de um "@" e um domínio válido'

    const messageValidaton = input.setCustomValidity(message);

    return messageValidaton;
}

function foneValidator(input) {
    const fone = input.value;
    const regexFone = /^(\d{2})?(\d{2}9\d{4}\-?\d{4})$/g;
    const result = regexFone.test(fone);
    const message = (result) ? '' : 'Formato válido: "00 90000-0000"';

    const messageValidaton = input.setCustomValidity(message);

    return messageValidaton;
}
