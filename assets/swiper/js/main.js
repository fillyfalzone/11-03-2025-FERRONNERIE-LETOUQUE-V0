/*=============== SWIPER JS ===============*/
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
let sliderContainer = document.querySelector('.section-gallery');

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



// Initialisation du deuxième Swiper
let swiper2 = new Swiper('.section-gallery', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 2000,
    effect: 'slide',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

// Pause au survol et reprise au départ du curseur pour swiper2
let sliderContainer2 = document.querySelector('.section-gallery');
sliderContainer2.addEventListener('mouseenter', () => {
    swiper2.autoplay.stop();
});
sliderContainer2.addEventListener('mouseleave', () => {
    swiper2.autoplay.start();
});

// Force l'initialisation du Swiper après les modifications
swiper2.init();

// Force l'initialisation du Swiper après l'ajout de la classe
swiper2.init();