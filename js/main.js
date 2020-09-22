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

function showAddress(element_id) {
    let a = ["a", "n", "d", "r", "e", "u"];
    let b = ["s", "a", "n", "t", "a", "r", "e", "n"];
    let c = ["g", "m", "a", "i", "l"];
    let d = ["c", "o", "m"]
    document.getElementById(element_id).textContent = a.join("") + "." + b.join("") + " " + String.fromCharCode(64) + " " + c.join("") + "." + d.join("");
}