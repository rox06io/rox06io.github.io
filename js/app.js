const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


// cambiar idioma
let langs = ['sp', 'eng'];
let lang = 'sp';
setLangStyles(lang);

function setStyles(styles) {
    var elementId = '__lang_styles';
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }

    let style = document.createElement('style');
    style.id = elementId;
    style.type = 'text/css';

    if (style.styleSheet) {
        style.styleSheet.cssText = styles;
    } else {
        style.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function setLang(lang) {
    setLangStyles(lang);
    console.log("Done");
}


function setLangStyles(lang) {
    let styles = langs
        .filter(function(l) {
            return l != lang;
        })
        .map(function(l) {
            return ':lang(' + l + ') { display: none; }';
        })
        .join(' ');

    setStyles(styles);
}