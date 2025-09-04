// Elemente auswählen
const popupStart = document.querySelector('.information-popup');
const closeBtnStart = document.querySelector('.information-popup-close-button');

// Button-Klick → Popup schließen
closeBtnStart.addEventListener('click', function() {
    popupStart.style.display = 'none';
});