let navCatalog = document.querySelector('.catalog-nav');
let catalogToggle = document.querySelector('.catalog-nav__toggle');

navCatalog.classList.remove('catalog-nav--nojs');

catalogToggle.addEventListener('click', function () {
  if (navCatalog.classList.contains('catalog-nav--closed')) {
    navCatalog.classList.remove('catalog-nav--closed');
    navCatalog.classList.add('catalog-nav--opened');
  } else {
    navCatalog.classList.add('catalog-nav--closed');
    navCatalog.classList.remove('catalog-nav--opened');
  }
});
