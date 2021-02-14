import { homePage } from './home';

homePage.create();

const pageFlow = (function() { 
    const main = document.querySelector('.main')
    const selInputs = document.querySelectorAll('input')
    const tabFunctions = {
        0: () => {main.replaceChildren(); homePage.homeTab(); console.log('Home');},
        1: () => {main.replaceChildren(); console.log('Menu')},
        2: () => {main.replaceChildren(); console.log('Contact')},
    };
    for (let i = 0; i < selInputs.length; i++) {
        selInputs[i].addEventListener('click', tabFunctions[i]);
    };

    return {

    };
})();