const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    document.body.classList.toggle('sticky-body');
    
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active');
            navBtn.classList.remove('is-active');
            document.body.classList.remove('sticky-body');

        })
    })
}
navBtn.addEventListener('click', handleNav);
handleCurrentYear();

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}