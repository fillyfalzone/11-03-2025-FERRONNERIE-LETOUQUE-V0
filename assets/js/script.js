// Gestion de la barre de navigation et de la mise en évidence des liens actifs
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.pathname.split("/").pop();

    if (currentUrl === "" || currentUrl === "index.html") {
        currentUrl = "index.html"; // Assurer que l'accueil est bien détecté
    }

    // Activation des liens correspondants à l'URL actuelle
    document.querySelectorAll(".nav-item a").forEach(link => {
        let linkHref = link.getAttribute("href");

        if (currentUrl === linkHref) {
            link.parentElement.classList.add("active");

            // Vérifie si l'élément actif est dans un sous-menu
            let parentNavItem = link.closest(".nav-item");
            if (parentNavItem) {
                parentNavItem.classList.add("active");
            }
        }
    });
});

// Gestion du menu burger
document.addEventListener("DOMContentLoaded", function () {
    let burger = document.getElementById("burger");
    let navList = document.getElementById("nav-list");

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        let isOpen = navList.classList.toggle("open");

        // Changer l'icône du bouton burger
        if (isOpen) {
            burger.classList.remove("fa-bars");
            burger.classList.add("fa-times");
        } else {
            burger.classList.remove("fa-times");
            burger.classList.add("fa-bars");
        }
    }

    // Fermer le menu si on clique en dehors
    function closeMenu(event) {
        if (!navList.contains(event.target) && !burger.contains(event.target)) {
            navList.classList.remove("open");
            burger.classList.remove("fa-times");
            burger.classList.add("fa-bars");
        }
    }

    // Événements
    burger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
});

