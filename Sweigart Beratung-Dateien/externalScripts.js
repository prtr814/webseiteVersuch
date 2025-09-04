// Elemente auswählen
const link = document.querySelector('.impressum-disclaimer-popup-button');
const popup = document.querySelector('.impressum-disclaimer-container');
const overlay = document.querySelector('.impressum-disclaimer-container-overlay');
const closeBtn = document.querySelector('.impressum-disclaimer-close-button');

// Link-Klick → Popup öffnen
link.addEventListener('click', function(e) {
  e.preventDefault();
  popup.style.display = 'block';
});

// Button-Klick → Popup schließen
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Overlay-Klick → Popup schließen
overlay.addEventListener('click', function() {
  popup.style.display = 'none';
});
