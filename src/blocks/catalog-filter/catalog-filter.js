const buttonNode = document.querySelector('.catalog__show-filter');
const filterNode = document.querySelector('.catalog-filter');
const mediaQuery = matchMedia('(max-width: 1023px)');

const TEXT_SHOW = 'Показать фильтр';
const TEXT_HIDE = 'Скрыть фильтр';
const TEXT_SHORT = 'Фильтр';

if (filterNode) {
  handleClose();
  handleButton();
  if (mediaQuery.matches) toggleFilter();
  mediaQuery.addEventListener('change', toggleFilter);
}

function toggleFilter() {
  filterNode.classList.toggle('catalog-filter_hidden');
  toggleButton();
}

function toggleButton() {
  if (!buttonNode) return;

  const buttonTextNode = buttonNode.querySelector('.catalog__show-filter-text');

  buttonNode.classList.toggle('catalog__show-filter_active');

  if (mediaQuery.matches) {
    buttonTextNode.textContent = TEXT_SHORT;
  } else {
    if (buttonNode.classList.contains('catalog__show-filter_active')) {
      buttonTextNode.textContent = TEXT_HIDE;
    } else {
      buttonTextNode.textContent = TEXT_SHOW;
    }
  }
}

function handleClose() {
  const buttonCloseNode = filterNode.querySelector('.catalog-filter__close');
  if (!buttonCloseNode) return;
  buttonCloseNode.addEventListener('click', toggleFilter);
}

function handleButton() {
  buttonNode.addEventListener('click', toggleFilter);
}
