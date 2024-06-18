// src\js\my-mobile-menu.js

(() => {
  const openMenuBtns = document.querySelectorAll("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  openMenuBtns.forEach(btn => {
    btn.addEventListener("click", toggleMenu);
    // console.log('Клик по кнопке открытия моб меню');
  });

  closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menu.classList.toggle("is-open");
  }
})();