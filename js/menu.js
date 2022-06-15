(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  // const bodyRef = document.body.classList.toggle("is-open");
 
  // document.body.classList.toggle("modal-open");
  const bodyRef = document.querySelector("[is-open]")



  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    

    mobileMenuRef.classList.toggle("is-open");
    bodyRef.classList.toggle("is-open");
  
    // const bodyRef = document.body.classList.add("is-open");
    // const bodyRef = document.body.classList.toggle()
  
  });
  
  



})();