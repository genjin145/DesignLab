const buttonNode = document.querySelector('.header__burger');
const popupNode = document.querySelector('.burger-popup');
const mediaQuery = window.matchMedia('(max-width: 1023px)');

mediaQuery.addEventListener('change', handleOrientationChange);
buttonNode.addEventListener('click', handleButton);

function handleButton() {
  buttonNode.classList.toggle('burger_active');
  popupNode.classList.toggle('burger-popup_visible');
}

function handleOrientationChange(evt) {
  if (evt.matches) return;
  buttonNode.classList.remove('burger_active');
  popupNode.classList.remove('burger-popup_visible');
}
