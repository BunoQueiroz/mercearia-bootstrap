const form = document.getElementById('register');
const btnForm = document.getElementById('button-form');

btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    const formObj = convertFormToObj(form);
    if(nameValidator(formObj)){
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

function nameValidator(formObj) {
    const reNumber = /\d/;
    const str = formObj.name;
    const result = reNumber.test(str);
    
    if(result){
        return false
    }
    return true
}
