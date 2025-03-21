// loading bar als een link geklikt wordt

const page = document.querySelector("main");
const anchorTags = document.querySelectorAll("a");
const loading = document.querySelector(".loading-circle");
const overlay = document.querySelector(".overlay");
const loadingTekst = document.querySelector(".loading-text");


// op elke link is er een event istener
anchorTags.forEach((link) => {
    // bij een klik komt de loading circle op beeld
    link.addEventListener("click", () => {
        loading.classList.remove("hidden");
        overlay.classList.remove("hidden");
        loadingTekst.classList.remove("hidden");
    });
});
