// BURGER

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

// Панель Amount
// MIN / MAX VALUE

const input = document.querySelector('.amount-input');
const min = +input.min;
const max = +input.max;
input.addEventListener('input', () => {
    const value = +input.value;
    if (value > max) { input.value = max }
    else if (value < min) { input.value = min }
});

// SET ACTIVE DOT + WRITE IN INPUT

const dots = document.querySelectorAll('.yellow-dot-cover');
const price = document.querySelectorAll('.price');
Array.from(dots).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(el => { el.classList.remove('active-dot') });
        price.forEach(el => { el.classList.remove('active1') });
        dot.classList.add('active-dot');
        price[index].classList.add('active1');

        const donateSum = +document.querySelector('.active1').textContent.replace(/\D+/g, '');
        input.value = donateSum;
    });
});

input.addEventListener('input', (e) => {
    
    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(el => { el.classList.remove('active-dot') });
            price.forEach(el => { el.classList.remove('active1') });
            dot.classList.add('active-dot');
            price[index].classList.add('active1');
    
            const donateSum = +document.querySelector('.active1').textContent.replace(/\D+/g, '');
            input.value = donateSum;
        });
    });

    input.value = input.value.replace(/[^0-9]/g, '');

    dots.forEach((item) => item.classList.remove('active-dot'));
    price.forEach((item) => item.classList.remove('active1'));

    switch (input.value) {
        case '25':
            dots[7].classList.add('active-dot');
            price[7].classList.add('active1');
            break;
        case '50':
            dots[6].classList.add('active-dot');
            price[6].classList.add('active1');
            break;
        case '100':
            dots[5].classList.add('active-dot');
            price[5].classList.add('active1');
            break;
        case '250':
            dots[4].classList.add('active-dot');
            price[4].classList.add('active1');
            break;
        case '500':
            dots[3].classList.add('active-dot');
            price[3].classList.add('active1');
            break;
        case '1000':
            dots[2].classList.add('active-dot');
            price[2].classList.add('active1');
            break;
        case '2000':
            dots[1].classList.add('active-dot');
            price[1].classList.add('active1');
            break;
        case '5000':
            dots[0].classList.add('active-dot');
            price[0].classList.add('active1');;
            break;
    }
});
