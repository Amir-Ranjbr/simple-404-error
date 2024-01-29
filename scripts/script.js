let menuOpen = false;
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
const body = document.body;

iconMenu.addEventListener('click', function () {
  if (!menuOpen) {
    iconMenu.classList.replace('fa-bars', 'fa-times');
    menu.style.left = '0';
    menu.style.opacity = '1';
    body.style.marginLeft = '9rem';
  } else {
    iconMenu.classList.replace('fa-times', 'fa-bars');
    menu.style.left = '-350px';
    menu.style.opacity = '0';
    body.style.marginLeft = '0';
  }

  menuOpen = !menuOpen;
});
