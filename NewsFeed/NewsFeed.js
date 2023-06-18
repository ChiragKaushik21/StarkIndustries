// Stop carousel animation on hover
const carouselOuter = document.querySelector('.carousel-outer');
let animationInterval;

carouselOuter.addEventListener('mouseover', () => {
    stopCarouselAnimation();
});

carouselOuter.addEventListener('mouseout', () => {
    resumeCarouselAnimation();
});

// Functions to control carousel animation
function startCarouselAnimation() {
    animationInterval = setInterval(() => {
        const carouselInner = document.querySelector('.carousel-inner');
        const firstItem = carouselInner.querySelector('.carousel-item');
        const clone = firstItem.cloneNode(true);
        carouselInner.appendChild(clone);

        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            carouselInner.style.transform = 'translateX(-33.33%)';
        }, 50);

        setTimeout(() => {
            carouselInner.style.transform = 'translateX(-66.66%)';
        }, 550);

        setTimeout(() => {
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = 'translateX(-33.33%)';
            firstItem.remove();
        }, 1000);
    }, 3000);
}

function stopCarouselAnimation() {
    clearInterval(animationInterval);
}

function resumeCarouselAnimation() {
    startCarouselAnimation();
}

// Start the carousel animation initially
startCarouselAnimation();
