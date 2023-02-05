{
const burgerItem = document.querySelector('.burger');
const headerNav = document.querySelector('.header-nav');
const headerMenuClose = document.querySelector('.header-menu-close-x');
const overlay = document.querySelector('.header-nav-overlay');

function showBurgerMenu () {
    headerNav.classList.add('header-nav-active');
    overlay.classList.add('overlay-active');
};

function hideBurgerMenu () {
    headerNav.classList.remove('header-nav-active');
    overlay.classList.remove('overlay-active');
};

burgerItem.addEventListener('click', showBurgerMenu);
headerMenuClose.addEventListener('click', hideBurgerMenu);
overlay.addEventListener('click', hideBurgerMenu);
}


//Попап при нажатии на отзыв в блоке Testimonials.

{
    const HTML = document.documentElement;
    const feedbackCards = document.querySelectorAll('.gradient-wrap');
    const CardInner = document.querySelectorAll('.feedback-card');
    const overlay = document.querySelector('.testimonials-overlay');
    const closeButton = document.querySelector('.testimonials-close-x');
    const parent = document.querySelector('.feedback-wrap');

    

    Array.from(feedbackCards).forEach((card, index) => {
        card.addEventListener('click', () => {
            if (HTML.clientWidth <= 750) {

                card.classList.add('feedback-card-active');
                overlay.classList.add('testimonials-overlay-active');
                closeButton.classList.add('display-block');   
            }
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('testimonials-overlay-active');
        closeButton.classList.remove('display-block');
        Array.from(feedbackCards).forEach((card, index) => {
            card.classList.remove('feedback-card-active');
        }); 
        
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('testimonials-overlay-active');
        closeButton.classList.remove('display-block');
        Array.from(feedbackCards).forEach((card, index) => {
            card.classList.remove('feedback-card-active');
        }); 
        
    });

}
