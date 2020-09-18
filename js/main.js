
page_config = {
    "lang": "en"
}

function setNightTheme() {
    let element = document.body;
    element.classList.add("night_theme")
}

function setDayTheme() {
    let element = document.body;
    element.classList.remove("night_theme");
}

function setLang(lang) {
    page_config["lang"] = lang
}