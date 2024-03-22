var darkm_btn = document.querySelector(".lastElem i")
var nav = document.querySelector("#nav")
var logo = document.querySelector(".logo h1")
var navtext = document.querySelectorAll(".midElem ul li a")
var header = document.querySelector(".side1 h2")
var para = document.querySelector(".side1 p")
var docs = document.querySelector("body")
function toggleDarkMode(){
    nav.classList.toggle('nav_dark')
    logo.classList.toggle('logo_dark')
    navtext.forEach(text=>{
        console.log(text)
        text.classList.toggle('navtext_dark')
    })
    header.classList.toggle('header_dark')
    para.classList.toggle('para_dark')
    docs.classList.toggle('body_dark')
    darkm_btn.classList.toggle('d-mode1')

    var darkModeEnabled = docs.classList.contains('body_dark');
    localStorage.setItem('darkMode', darkModeEnabled);
}

window.addEventListener('load', () => {
    var darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        toggleDarkMode();
    }
});

darkm_btn.addEventListener("click", toggleDarkMode);


