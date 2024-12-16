const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu__close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

const wrapItems = document.querySelector('#list');

const createButton = (isAdd, elementInput) => {
  let operation;
  let cssClass;

  const btn = document.createElement('button');
  if (isAdd === true) {
    operation = '+';
    cssClass = 'plus'
    btn.onclick = () => elementInput.value = parseInt(elementInput.value, 10) + 1;
  } else {
    operation = '-';
    cssClass = 'minus';
    btn.onclick = () => elementInput.value = parseInt(elementInput.value, 10) - 1;
  }
  btn.classList.add('btn-counter', cssClass);

  btn.innerHTML = `<p class="btn-text">${operation}</p>`;

  return btn;
}

document.querySelector('#add-item').addEventListener('click', () => {
  const itemDiv = document.createElement('div');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = 1;
  const btnPlus = createButton(true, input);
  const btnMinus = createButton(false, input);

  itemDiv.append(btnMinus, input, btnPlus);

  wrapItems.appendChild(itemDiv);
});
  
  


  

  


  


