import './bootstrap';
import '../css/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

    }
    else {
        header.classList.remove('navbar-fixed');
    }
}

// window.onscroll = function() {
//     const portfolio = document.querySelector('#portfolio');
//     const fixedPortfolio = portfolio.offsetTop;

//     if(window.pageYOffset > fixedPortfolio) {
//         portfolio.classList.add('portfolio-image');

//     }
//     else {
//         header.classList.remove('portfolio-image');
//     }
// }

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

