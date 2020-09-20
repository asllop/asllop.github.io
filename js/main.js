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

// This method is used by the onclick that fires "hover" css rules in mobile
function justClick() {}