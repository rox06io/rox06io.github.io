/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
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
    ChangeColor(lang);
    console.log("Done");
}

function ChangeColor(lang) {
    if (lang === 'sp') {
        document.getElementById('sp').style.color = "#ffaec0";
        document.getElementById('eng').style.color = "#1a2a3a";
    } else {
        document.getElementById('sp').style.color = "#1a2a3a";
        document.getElementById('eng').style.color = "#ffaec0";
    }
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

window.onload = function() {
    ChangeColor("sp");
}