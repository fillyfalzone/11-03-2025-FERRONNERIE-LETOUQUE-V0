/*=============== SWIPER JS ===============*/
// let swiper = new Swiper('.card__content', {
//     loop: true,
//     spaceBetween: 32,
//     grabCursor: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // Responsive breakpoints
//     breakpoints: {
//         600: {
//             slidesPerView: 2,
//         },
//         968: {
//             slidesPerView: 3,
//         },
//     },

// });

// Initialisation de Swiper
let swiper = new Swiper('.card__content', {
    loop: true, // Permet au carrousel de défiler en boucle
    spaceBetween: 32, // Définit l'espace entre les slides
    grabCursor: true, // Change le curseur en "main" pour un effet interactif

    // // Configuration de la pagination
    // pagination: {
    //     el: '.swiper-pagination', // Sélectionne l'élément de pagination
    //     clickable: true, // Permet de cliquer sur les bullets pour changer de slide
    //     dynamicBullets: true, // Affiche des bullets dynamiques (taille variable)
    // },

        // Configuration de l'autoplay
        autoplay: {
            delay: 1000, // Temps entre chaque slide (3000ms = 3s)
            disableOnInteraction: false, // Continue après une interaction utilisateur
            pauseOnMouseEnter: true, // Met en pause lors du survol
        },

        speed: 2000, // Vitesse de transition en millisecondes (1 seconde pour un défilement fluide)
        effect: 'slide', // Utilisation de l'effet de transition 'slide'
    

    // Configuration des flèches de navigation
    navigation: {
        nextEl: '.swiper-button-next', // Sélectionne le bouton "Suivant"
        prevEl: '.swiper-button-prev', // Sélectionne le bouton "Précédent"
    },

    // Configuration des différents écrans (responsive)
    breakpoints: {
        600: {
            slidesPerView: 2, // Affiche 2 slides sur écrans ≥ 600px
        },
        968: {
            slidesPerView: 3, // Affiche 3 slides sur écrans ≥ 968px
        },
    },

    // Événement déclenché à l'initialisation du Swiper
    on: {
        init: function () {
            // Sélectionne l'élément de pagination et lui ajoute une classe CSS personnalisée
            document.querySelector('.swiper-pagination').classList.add('custom-pagination');
        },
    },
});

// Pause au survol et reprise au départ du curseur
let sliderContainer = document.querySelector('.card__content');

// Met en pause le slider au survol
sliderContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

// Relance le slider quand la souris quitte
sliderContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});

// Force l'initialisation du Swiper après les modifications
swiper.init();

// Force l'initialisation du Swiper après l'ajout de la classe
swiper.init();

