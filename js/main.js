function setNightTheme() {
    let element = document.body;
    element.classList.add("night_theme")
    localStorage.setItem("theme", "night");
}

function setDayTheme() {
    let element = document.body;
    element.classList.remove("night_theme");
    localStorage.setItem("theme", "day");
}
