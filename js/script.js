/* ==========================================================
   Mobile navigation
   The navigation links remain plain HTML links, so they work
   even if JavaScript is unavailable. This file only controls
   opening and closing the small-screen menu.
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-navigation");

  if (!toggle || !menu) {
    return;
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    menu.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      closeMenu();
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".site-nav")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
});
