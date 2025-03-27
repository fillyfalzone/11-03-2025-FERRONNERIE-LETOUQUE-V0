// Flickity
document.addEventListener('DOMContentLoaded', function () {
    // Définition des options pour Flickity
    var options = {
      accessibility: true, // Permet de naviguer avec le clavier
      prevNextButtons: false, // Affiche les boutons "précédent" et "suivant"
      pageDots: false, // Affiche les indicateurs de pagination (les petits points)
      setGallerySize: false, // Empêche Flickity d'ajuster automatiquement la hauteur du slider
      autoPlay: false, // Active le défilement automatique toutes les 3 secondes
      pauseAutoPlayOnHover: false, // Met en pause l'autoplay lorsque la souris survole le slider
      wrapAround: false, // Permet de revenir au premier slide après le dernier (boucle infinie)
  
      // Personnalisation de la forme des flèches de navigation
      arrowShape: {
        x0: 10,  // Position de départ (point d'origine de la flèche)
        x1: 60,  // Longueur de la ligne principale
        y1: 50,  // Position verticale de la ligne principale
        x2: 60,  // Position horizontale de la pointe de la flèche
        y2: 45,  // Position verticale de la pointe
        x3: 15   // Position de la queue de la flèche
      }
    };

    // Initialisation du carousel avec Flickity en utilisant les options définies
var $carousel = $('[data-carousel]').flickity(options);

// Sélectionne tous les éléments ayant la classe .slide-content (contenu des slides)
var $slideContent = $('.slide-content');

// Récupère l'instance Flickity du carousel
var flkty = $carousel.data('flickity');

// Stocke l'élément actuellement sélectionné
var selectedSlide = flkty.selectedElement;

// Événement déclenché lorsque Flickity a fini de déplacer un slide
flkty.on('settle', function (index) {
selectedSlide = flkty.selectedElement; // Met à jour le slide actuellement visible
});

// Événement déclenché lorsqu'on change de slide
flkty.on('change', function (index) {
$slideContent.eq(index).removeClass('mask'); // Affiche le contenu du slide actif

// Après 500ms, on remet le masque sur les autres slides
setTimeout(function () {
  $slideContent.addClass('mask');
}, 500);
});

// Événement déclenché lorsqu'on commence à faire glisser un slide (drag)
flkty.on('dragStart', function (event) {
var index = 0; // Initialisation de l'index du slide cible
selectedSlide = flkty.selectedElement; // Stocke le slide en cours

// Vérifie si le mouvement est vers la droite ou la gauche
if (event.layerX > 0) { // Si la valeur de layerX est positive → mouvement vers la droite
  index = $(selectedSlide).index() + 1; // On passe au slide suivant
} else { // Sinon, mouvement vers la gauche
  index = $(selectedSlide).index() - 1; // On passe au slide précédent
}

// Affiche le contenu du slide actif
$slideContent.eq(index).removeClass('mask');
});

// Ajoute une classe "mask" après un petit délai pour gérer les animations de transition
setTimeout(function () {
$slideContent.addClass('mask');
}, 500);
});

