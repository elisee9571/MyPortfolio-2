const openNav = document.querySelector('.menu-open');
const closeNav = document.querySelector('.menu-close');
/* navigation menu */
const navMenu = document.querySelector('.menu');

openNav.addEventListener('click', () => {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector('.menu').classList.remove('fade-out');
    bodyScrollingToggle();
});
closeNav.addEventListener('click', () => {
    document.getElementById("myNav").style.width = "0";
    document.querySelector('.menu').classList.add('fade-out');
    bodyScrollingToggle();
});

//body stop scrolling
function bodyScrollingToggle() {
    document.body.classList.toggle('stop-scrolling');
};

function hideNavMenu() {
    document.getElementById("myNav").style.width = "0";
    bodyScrollingToggle();
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('link-item')) {
        if (event.target.hash !== '') {
            event.preventDefault();
            const hash = event.target.hash;
            // desactivate existing active section
            document.querySelector('.section.active').classList.add('hide');
            document.querySelector('.section.active').classList.remove('active');
            // activate new section
            document.querySelector(hash).classList.add('active');
            document.querySelector(hash).classList.remove('hide');
            //desactivate existing active navigation menu 'link-item'
            navMenu.querySelector('.active').classList.remove('active');
            //activate active navigation menu 'link-item'
            event.target.classList.add('active');
            hideNavMenu();
        }
    }
});