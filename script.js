"use strict";

const menuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector(".desktop-navigation");
const navigationLinks = document.querySelectorAll('.desktop-navigation a[href^="#"]');

function closeMobileMenu() {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("mobile-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
}

navigationLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMobileMenu();
});
