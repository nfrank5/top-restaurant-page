import Garbanzos from './garbanzo1.jpg'

function pageHome(){
  const div = document.createElement('div');
  
  div.appendChild(headline());
  div.appendChild(image());
  div.appendChild(text());

  div.style.textAlign = 'center';

  return div
}

function headline(){
  const headline = document.createElement('h1');
  headline.innerHTML = "Chikpeas Restaurant"
  headline.style.textAlign = "center";
  return headline;
}

function image(){
  const pic  = new Image();
  pic.src = Garbanzos;
  pic.style.textAlign = 'center';
  pic.style.border = "3px solid black"
  pic.style.margin = "1rem"

  return pic;
}

function text(){
  const text = document.createElement('p');
  text.innerHTML = 'Chickpeas is a small restaurant focused on meticulously preparing elaborate dishes inspired by and fused from the typical cuisine of the Middle East, India, and South America. The ingredients are carefully selected, and the service is customer-centric, ensuring comfort for all patrons.';
  text.style.textAlign = "center"
  return text;
}

export { pageHome };
