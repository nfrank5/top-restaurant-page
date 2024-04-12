import Garbanzos from './garbanzo1.jpg'

function pageLoad(){
  headline();
  image();
  text();
}

function headline(){
  const headline = document.createElement('h1');
  headline.innerHTML = "Restaurant Chikpeas"
  document.querySelector('#content').appendChild(headline);
}

function image(){
  const pic  = new Image();
  pic.src = Garbanzos;
  document.querySelector('#content').appendChild(pic);
}

function text(){
  const text = document.createElement('p');
  text.innerHTML = 'Chickpeas is a small restaurant focused on meticulously preparing elaborate dishes inspired by and fused from the typical cuisine of the Middle East, India, and South America. The ingredients are carefully selected, and the service is customer-centric, ensuring comfort for all patrons.';
  document.querySelector('#content').appendChild(text);
}


export { pageLoad };
