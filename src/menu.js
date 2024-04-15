import Falafel from './falafel1.jpg'

const menu = [ ['Falafel', 2], ['Humus', 1.5], 
               ['Brownies', 2], ['Butter cookies', 1.5]];

function pageMenu(){
  const div = document.createElement('div');
  div.appendChild(headline());
  div.appendChild(image());
  div.appendChild(menuList());
  div.style.display = "flex";
  div.style.flexDirection = "column"
  div.style.textAlign = 'center';
  div.style.alignItems = "center";
  return div
}

function headline(){
  const headline = document.createElement('h1');
  headline.innerHTML = "Menu"
  headline.style.textAlign = "center";
  return headline;
}

function image(){
  const pic  = new Image();
  pic.src = Falafel;
  pic.style.border = "3px solid black"
  pic.style.margin = "0.5rem"
  return pic;

}

function menuList(){
  const tbl = document.createElement('table');
  for (let i = 0; i < menu.length; i++) {
    const tr = tbl.insertRow();
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(`${menu[i][0]}: $${menu[i][1]}`));
  }
  return tbl;
}

export { pageMenu };
