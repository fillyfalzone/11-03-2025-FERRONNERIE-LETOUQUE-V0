document.addEventListener("DOMContentLoaded", function () {
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


    // Gestion du menu burger

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

<<<<<<< HEAD
    /*   ----- Fonction pour déplacer le lien selon la largeur de l'écran ---*/
    // // Fonction pour déplacer le lien selon la largeur de l'écran
    // function moveLink() {
    //     let lien = document.getElementById("maitre-artisant"); // Vérifie l'élément à déplacer
    //     let divA = document.getElementById("social-media2"); // Div pour les grands écrans
    //     let divB = document.getElementById("logo-container"); // Div pour les petits écrans

    //     if (!lien || !divA || !divB) return; // Vérifie que les éléments existent

    //     if (window.innerWidth <= 1114) {
    //         if (lien.parentElement !== divB) {
    //             divB.appendChild(lien); // Déplace vers divB (petits écrans)
    //         }
    //     } else {
    //         if (lien.parentElement !== divA) {
    //             divA.appendChild(lien); // Déplace vers divA (grands écrans)
    //         }
    //     }
    // }

    // // Exécute la fonction au chargement et au redimensionnement
    // window.addEventListener("resize", moveLink);
    // window.addEventListener("DOMContentLoaded", moveLink);


    /* -------------------------- Gesttion de l'ouverture du dropdown sur mobile apple -------------------------- */
=======
/* -------------------------- Gesttion de l'ouverture du dropdown sur mobile apple -------------------------- */
document.addEventListener("DOMContentLoaded", function () {
>>>>>>> 4b492d7cd74282186b8c50095e3e89d154d6fcf6
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
<<<<<<< HEAD
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }
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

});
=======
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
>>>>>>> 4b492d7cd74282186b8c50095e3e89d154d6fcf6
