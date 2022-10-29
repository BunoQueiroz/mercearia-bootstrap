import { validation } from './validity.js';
import { fixedNavbar } from './fixedNavbar.js';

const navbar = document.querySelector('.navbar');
const inputs = document.querySelectorAll('input');

fixedNavbar(navbar);

inputs.forEach( input =>{
    input.addEventListener('input', event =>{
        validation(event.target);
    }); 
});
