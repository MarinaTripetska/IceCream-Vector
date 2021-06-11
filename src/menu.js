// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//         document.body.classList.toggle("menu-open");
    
    
//     });

    
// })();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuNavLink = [...document.querySelectorAll('.navigation__link ')];
  menuNavLink.forEach(e => {
    e.addEventListener('click', () => {
      menuBtnRef.classList.toggle('is-open');
      mobileMenuRef.classList.toggle('is-open');
     document.body.classList.toggle("menu-open");
    });
  });
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  document.body.classList.toggle("menu-open");

      
  });
})();
   