const menuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector(".desktop-navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("mobile-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("mobile-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}