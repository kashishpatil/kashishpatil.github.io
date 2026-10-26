const root = document.documentElement;
const button = document.getElementById("theme-toggle");

function currentTheme() {
    return root.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
}

function updateButton() {
    button.textContent = currentTheme() === "dark" ? "Light mode" : "Dark mode";
}

button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
        localStorage.setItem("theme", next);
    } catch (e) {}
    updateButton();
});

updateButton();

// Hero
const hero = document.getElementById("hero");
const heroContent = hero.querySelector(".hero-content");

function updateHero() {
    const distance = hero.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max((window.scrollY - hero.offsetTop) / distance, 0), 1);
    hero.style.setProperty("--p", progress);
    heroContent.inert = progress > 0.5;
}

window.addEventListener("scroll", updateHero, {passive: true});
window.addEventListener("resize", updateHero);
updateHero();