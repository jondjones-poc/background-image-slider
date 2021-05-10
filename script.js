const body = document.body;
const slides = document .querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let activeSlider = 0;

leftButton.addEventListener('click', () => {
    activeSlider++;

    if (activeSlider > slides.length - 1) {
        activeSlider = 0;
    }
    setBackgroundToBody();
    setActiveSlide();
})

rightButton.addEventListener('click', () => {
    activeSlider--;

    if (activeSlider <  0) {
        activeSlider = slides.length - 1;
    }
    setBackgroundToBody();
    setActiveSlide();
})


const setBackgroundToBody = () => {
    body.style.backgroundImage = slides[activeSlider].style.backgroundImage;
};

const setActiveSlide = () => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlider].classList.add('active')
}

setBackgroundToBody();