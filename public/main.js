// loading bar als een link geklikt wordt

const page = document.querySelector("main");
const anchorTags = document.querySelectorAll("a");
const loading = document.querySelector(".loading-circle");

// op elke link is er een event istener
anchorTags.forEach((link) => {
    link.addEventListener("click", () => {
        loading.classList.remove("hidden");
    });
});
