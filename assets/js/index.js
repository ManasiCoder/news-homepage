const btnOpenMenu = document.querySelector('#openMenu');
const btnCloseMenu = document.querySelector('#closeMenu');
const menuOpen = document.querySelector('.menuOpen');
const linksMenuMobile = document.querySelectorAll('.link-menu-mobile');


btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
linksMenuMobile.forEach(link => {
  link.addEventListener("click", closeMenu);
});

function openMenu() {
  menuOpen.style.display = "flex";
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
}

function closeMenu() {
  menuOpen.style.display = "none";
  btnOpenMenu.style.display = "block";
  btnCloseMenu.style.display = "none";
}