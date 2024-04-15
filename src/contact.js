
import Humus from './humus1.jpg'

function pageContact(){
  const div = document.createElement('div');
  div.appendChild(headline());
  div.appendChild(image());
  div.appendChild(text());
  div.style.textAlign = 'center';
  return div
}

function headline(){
  const headline = document.createElement('h1');
  headline.innerHTML = "Contact"
  headline.style.textAlign = "center";
  return headline;
}

function image(){
  const pic  = new Image();
  pic.src = Humus;
  pic.style.textAlign = 'center';
  pic.style.border = "3px solid black"
  return pic;
}

function text(){
  const text = document.createElement('p');
  text.innerHTML = 'Wisteria Lane #54 East Little Horse - CABA CP. 1424';
  text.style.textAlign = "center"
  return text;
}

export { pageContact };