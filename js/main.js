function setNightTheme() {
    let element = document.getElementById("body_section");
    element.classList.add("night_theme")
    localStorage.setItem("theme", "night");
}

function setDayTheme() {
    let element = document.getElementById("body_section");
    element.classList.remove("night_theme");
    localStorage.setItem("theme", "day");
}
