(() => {
    const openMenuBtns = document.querySelectorAll("[data-menu-open]");
    const closeMenuBtn = document.querySelector("[data-menu-close]");
    const menu = document.querySelector("[data-menu]");
  
    openMenuBtns.forEach(btn => {
      btn.addEventListener("click", toggleMenu);
    });
  
    closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      menu.classList.toggle("is-open");
    }
  })();
  