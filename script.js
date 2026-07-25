"use strict";

const menuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector(".desktop-navigation");
const navigationLinks = document.querySelectorAll(
    '.desktop-navigation a[href^="#"]'
);
const pageSections = document.querySelectorAll("main section[id]");

function closeMobileMenu() {
    if (!menuButton || !navigation) {
        return;
    }

    navigation.classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

function toggleMobileMenu() {
    if (!menuButton || !navigation) {
        return;
    }

    const isOpen = navigation.classList.toggle("mobile-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

function updateActiveNavigation() {
    if (!pageSections.length || !navigationLinks.length) {
        return;
    }

    let activeSectionId = "home";
    const scrollPosition = window.scrollY + 160;

    pageSections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
            activeSectionId = section.id;
        }
    });

    navigationLinks.forEach((link) => {
        const targetId = link.getAttribute("href");

        link.classList.toggle(
            "active",
            targetId === `#${activeSectionId}`
        );
    });
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMobileMenu);
}

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (event) => {
    if (!menuButton || !navigation) {
        return;
    }

    const clickedInsideNavigation = navigation.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideNavigation && !clickedMenuButton) {
        closeMobileMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        closeMobileMenu();
    }
});

window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
});

updateActiveNavigation();