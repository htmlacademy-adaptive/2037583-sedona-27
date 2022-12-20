
let navRewiew = document.querySelector('.rewiew-nav');
let rewiewToggle = document.querySelector('.rewiew-nav__toggle');

navRewiew.classList.remove('rewiew-nav--nojs');

rewiewToggle.addEventListener('click', function () {
  if (navRewiew.classList.contains('rewiew-nav--closed')) {
    navRewiew.classList.remove('rewiew-nav--closed');
    navRewiew.classList.add('rewiew-nav--opened');
  } else {
    navRewiew.classList.add('rewiew-nav--closed');
    navRewiew.classList.remove('rewiew-nav--opened');
  }
});
