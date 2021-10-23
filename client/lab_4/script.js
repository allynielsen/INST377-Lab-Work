/* eslint-disable indent */
document.addEventListener('DOMContentLoaded', () => {
    let slidePosition = 0;
    const slides = document.querySelectorAll('.carousel_item');
    const totalSlides = slides.length;

    function updateSlidePosition() {
        // eslint-disable-next-line no-restricted-syntax
        for (slide of slides) {
            slide.classList.remove('carousel_item_visible');
            slide.classList.add('carousel_item_hidden');
        }

        slides[slidePosition].classList.add('carousel_item_visible');
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition += 1;
        }

        updateSlidePosition();
    }
    function moveToPrevSlide() {
        if (slidePosition === 0) {
            slidePosition = 0;
        } else {
            slidePosition -= 1;
        }
        updateSlidePosition();
    }

    document
        .querySelector('#carousel_button_next')
        .addEventListener('click', () => {
            moveToNextSlide();
        });

    document
        .querySelector('#carousel_button_prev')
        .addEventListener('click', () => {
            moveToPrevSlide();
        });
});