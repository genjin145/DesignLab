const cardNodes = document.querySelectorAll('.product-card');

cardNodes.forEach((cardNode) => {
  initFavorite(cardNode);
  initImg(cardNode);
});

function initFavorite(parent) {
  const favoriteNode = parent.querySelector('.product-card__favorite');

  if (!favoriteNode) return;

  favoriteNode.addEventListener('click', () => {
    favoriteNode.classList.toggle('product-card__favorite_active');

    const countNode = favoriteNode.querySelector('.product-card__control-count');
    if (!countNode) return;

    if (favoriteNode.classList.contains('product-card__favorite_active')) {
      countNode.textContent = +countNode.textContent + 1;
    } else {
      countNode.textContent = +countNode.textContent - 1;
    }
  });
}

function initImg(parent) {
  const imgLinkNode = parent.querySelector('.product-card__img-link');
  const imgNode = parent.querySelector('.product-card__picture-img');
  const partNodes = parent.querySelectorAll('.product-card__part');
  const pointNodes = parent.querySelectorAll('.product-card__point');

  if (!partNodes.length) return;

  const defaultImgSrc = partNodes[0].dataset.src;

  selectPoint(0);

  partNodes.forEach((partNode, i) => {
    partNode.addEventListener('mouseover', handlePart);
    partNode.addEventListener('touchstart', handlePart);

    function handlePart(evt) {
      const newImgSrc = evt.target.dataset.src;
      imgLinkNode.href = newImgSrc;
      imgNode.src = newImgSrc;
      selectPoint(i);
    }
  });

  imgLinkNode.addEventListener('mouseout', () => {
    imgLinkNode.href = defaultImgSrc;
    imgNode.src = defaultImgSrc;
    selectPoint(0);
  });

  function selectPoint(index) {
    pointNodes.forEach((pointNode) =>
      pointNode.classList.remove('product-card__point_active')
    );
    pointNodes[index].classList.add('product-card__point_active');
  }
}
