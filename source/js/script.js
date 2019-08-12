const menuButton = document.querySelector('.header__nav-toggle');
const navigation = document.querySelector('.navigation');
const modalOpen = document.querySelectorAll('.modal-open');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');

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

if (modalOpen != null && modalWrapper != null) {
  for (let i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.remove('modal--closed');
    });
  }

  modalWrapper.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal__wrapper')) {
      modal.classList.add('modal--closed');
    }
  });
}
