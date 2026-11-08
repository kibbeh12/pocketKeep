document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".nav-links");

  if (mobileMenu) {
    mobileMenu.setAttribute("aria-label", "قائمة التنقل");
  }
});
