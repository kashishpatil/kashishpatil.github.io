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