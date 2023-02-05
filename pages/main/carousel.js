// <!-- 4. Блок Pick and feed a friend CAROUSEL.-->
const arrowRight = document.querySelector('.elipse-right');
const arrowLeft = document.querySelector('.elipse-left');
const carousel = document.querySelector('.carousel');


function moveFromLeft() {
    carousel.classList.add('transition-from-left');
    arrowLeft.removeEventListener('click', moveFromLeft);
    arrowRight.removeEventListener("click", moveFromRight);
};

function moveFromRight() {
    carousel.classList.add('transition-from-right');
    arrowLeft.removeEventListener('click', moveFromLeft);
    arrowRight.removeEventListener("click", moveFromRight);

};

arrowLeft.addEventListener('click', moveFromLeft);
arrowRight.addEventListener('click', moveFromRight);

const createLastElement = () => {
    let lastSlides = document.createElement('div');
    lastSlides.classList.add('animals-cards-container');
    lastSlides.innerHTML = carousel.firstElementChild.innerHTML;
    return lastSlides;
};

const createFirstElement = () => {
    let firstSlide = document.createElement('div');
    firstSlide.classList.add('animals-cards-container');
    firstSlide.innerHTML = carousel.lastElementChild.innerHTML;
    return firstSlide;
};

carousel.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-from-left') {
        carousel.classList.remove('transition-from-left');
        carousel.insertBefore(createFirstElement(), carousel.firstElementChild);
        carousel.lastElementChild.remove();
    } else {
        carousel.classList.remove('transition-from-right');
        carousel.appendChild(createLastElement());
        carousel.firstElementChild.remove();
    };

    arrowLeft.addEventListener('click', moveFromLeft);
    arrowRight.addEventListener('click', moveFromRight);
});



//Карусель в блоке Testimonials

