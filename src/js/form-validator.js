const form = document.getElementById('register');
const btnForm = document.getElementById('button-form');

btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    const formObj = convertFormToObj(form);
    if(nameAndLastNameValidator(formObj) && notEmptyForm(formObj) && emailValidator(formObj)){
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

function nameAndLastNameValidator(formObj) {
    let result = false;

    const reNumber = /\d/;
    const nameStr = formObj.name;
    const lastNameStr = formObj.lastName;
    const nameResult = reNumber.test(nameStr);
    const lastNameResult = reNumber.test(lastNameStr);
    
    if(nameResult || lastNameResult){
        result = false
    } else {
        result = true
    }
    return result
}

function notEmptyForm(formObj){
    const listValues = Object.values(formObj);
    let result = true;

    listValues.forEach( value => {
        if(value !== ''){
            result = true
        }else {
            result = false
        }
    });
    return result;
}

function emailValidator(formObj){
    let result = false;
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailStr = formObj.email;
    const emailResult = re.test(emailStr);

    if (emailResult) {
        result = true;
    }
    return result;
}
