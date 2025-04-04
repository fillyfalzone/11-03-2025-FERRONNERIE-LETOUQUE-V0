// Gestions de la position de la barre de navigation
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 105) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

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

/* -------------------------- Gesttion de l'ouverture du dropdown sur mobile apple -------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach((dropdown) => {
        let toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le lien de suivre l'URL
            event.stopPropagation(); // Évite la fermeture immédiate
            dropdown.classList.toggle("open");
        });

        toggle.addEventListener("touchstart", function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropdown.classList.toggle("open");
        });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }
        });
    });
});
/* -------------------------- Scroll-top -------------------------- */
const scrollTopButton = document.querySelector(".scroll-top");
if (scrollTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            scrollTopButton.classList.add("visible");
        } else {
            scrollTopButton.classList.remove("visible");
        }
    });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
