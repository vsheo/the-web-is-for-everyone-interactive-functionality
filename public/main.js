// loading bar als een link geklikt wordt
const loading = document.querySelector(".loading-overlay");
const anchorTags = document.querySelectorAll("a");


document.addEventListener("DOMContentLoaded", () => {
    if (loading.classList.contains("hidden")) {
        // op elke link is er een event istener
        anchorTags.forEach((link) => {
            // bij een klik komt de loading circle op beeld
            link.addEventListener("click", () => {
                loading.classList.remove("hidden");
            });
        });
    }
    else {
        loading.classList.add("hidden");
    }
});

// De loading circle blijft op scherm beeld als de back button geklikt wordt
// reset wanneer de website ingeladen wordt
// https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event
// https://stackoverflow.com/questions/15640087/javascript-unchecking-all-checkboxes
window.addEventListener("pageshow", () => {
    loading.classList.add("hidden");
});


// back button
// deze button brengt de gebruiker naar de vorige pagina
const backButton = document.querySelector(".button-back");

backButton.addEventListener("click", () => {
    // als de button geklikt wordt ga naar de vorige pagina
    window.history.back()
});
