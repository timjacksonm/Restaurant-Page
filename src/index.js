import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

homePage.create();

const pageFlow = (function() { 
    const main = document.querySelector('main')
    const selInputs = document.querySelectorAll('input')
    const tabFunctions = {
        0: () => {main.innerHTML = ''; homePage.homeTab();},
        1: () => {main.innerHTML = ''; menuPage.menuTab();},
        2: () => {main.innerHTML = ''; contactPage.contactTab();},
    };
    for (let i = 0; i < selInputs.length; i++) {
        selInputs[i].addEventListener('click', tabFunctions[i]);
    };

    return {

    };
})();