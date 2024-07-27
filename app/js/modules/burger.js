const burger = () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-mob');
  const bodyLock = document.querySelector('body');
  const menuMob = document.querySelector('.menu-mob');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mob--active');

    if (mobileMenu.classList.contains('menu-mob--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });

  menuMob.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('page-navigation__link')) {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
      mobileMenu.classList.remove('menu-mob--active');
    }
  });
}

export default burger;