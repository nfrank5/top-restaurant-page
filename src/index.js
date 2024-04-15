import './style.css';
import { pageHome } from './home.js';
import { pageMenu } from './menu.js';
import { pageContact } from './contact.js';

const navButtons = document.querySelectorAll('nav>button');
const divContent = document.querySelector('#content');
divContent.appendChild(pageHome());


function attachListeners(){
  navButtons.forEach(element => {
    element.addEventListener('click', showTab);
  });
};

function showTab(e){
    switch(e.target.innerText){
      case 'Home':
        clearContent();
        divContent.appendChild(pageHome());
        break;
      case 'Menu':
        clearContent();
        divContent.appendChild(pageMenu());
        break;
      case 'Contact':
        clearContent();
        divContent.appendChild(pageContact());
        break;
      default:
        console.error('Invalid button');
  }
}

function clearContent(){
  while (divContent.lastChild) {
    divContent.removeChild(divContent.lastChild);
  }
}

attachListeners();