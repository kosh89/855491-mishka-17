const menuButton = document.querySelector('.header__nav-toggle');
const navigation = document.querySelector('.navigation');

navigation.classList.remove('navigation--nojs');

menuButton.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    menuButton.classList.add('header__nav-toggle--opened');
  } else {
    navigation.classList.add('navigation--closed');
    menuButton.classList.remove('header__nav-toggle--opened');
  }
})
