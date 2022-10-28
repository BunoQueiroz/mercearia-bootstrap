const form = document.getElementById('register');
const btnForm = document.getElementById('button-form');

btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    if(formValidator(form)){
        console.log('Vai dar é certo pvt')
    }
});

function convertFormToObj(form) {
    form = {
        name: form.name.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
    };
    return form;
}

function formValidator(form){
    const formObj = convertFormToObj(form);
    let result = (nameAndLastNameValidator(formObj) && emailValidator(formObj) && passwordValidator(formObj)) ? true : false;
    return result;
}

function nameAndLastNameValidator(formObj) {
    const regexNameAndLastName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}$/;
    const nameStr = formObj.name;
    const lastNameStr = formObj.lastName;
    const nameResult = regexNameAndLastName.test(nameStr);
    const lastNameResult = regexNameAndLastName.test(lastNameStr);
    
    let result = (nameResult && lastNameResult) ? true : false;
    return result
}

function emailValidator(formObj){
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailStr = formObj.email;
    const emailResult = regexEmail.test(emailStr);

    let result = emailResult ? true : false;
    return result;
}

function passwordValidator(formObj){
    const regexStrongPassword = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
    const passStr = formObj.password;
    const passResult = regexStrongPassword.test(passStr);

    let result = passResult ? true : false;
    return result;

}
