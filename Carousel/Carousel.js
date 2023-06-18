const carouselSlide = document.querySelector('.carousel-slide');
const carouselSections = carouselSlide.querySelectorAll('.carousel-section');
const carouselNextBtn = document.querySelector('.carousel-next-btn');
const carouselPrevBtn = document.querySelector('.carousel-prev-btn');
const carouselIndicators = document.querySelector('.carousel-indicators');

let counter = 0;
const slideWidth = carouselSections[0].clientWidth;
const slideCount = carouselSections.length;

// Clone the first slide and append it after the last slide
const firstSlideClone = carouselSections[0].cloneNode(true);
carouselSlide.appendChild(firstSlideClone);

carouselNextBtn.addEventListener('click', () => {
  if (counter >= slideCount - 1) {
    carouselSlide.style.transition = 'transform 0.3s ease-in-out'; // Enable transition
    carouselSlide.style.transform = `translateX(${-slideWidth * (counter + 1)}px)`; // Transition to the next slide
    counter++;
    
    // Reset to the first slide after the last slide
    setTimeout(() => {
      carouselSlide.style.transition = 'none'; // Disable transition temporarily
      carouselSlide.style.transform = `translateX(0)`;
      counter = 0;
    }, 300);
  } else {
    carouselSlide.style.transition = 'transform 0.3s ease-in-out'; // Enable transition
    carouselSlide.style.transform = `translateX(${-slideWidth * (counter + 1)}px)`; // Transition to the next slide
    counter++;
  }
});

carouselPrevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    carouselSlide.style.transition = 'none'; // Disable transition temporarily
    carouselSlide.style.transform = `translateX(${-slideWidth * slideCount}px)`; // Jump to the cloned first slide instantly
    counter = slideCount;
    setTimeout(() => {
      carouselSlide.style.transition = 'transform 0.3s ease-in-out'; // Enable transition after the jump
      carouselSlide.style.transform = `translateX(${-slideWidth * (counter - 1)}px)`; // Transition to the previous slide
      counter--;
    }, 10);
  } else {
    carouselSlide.style.transition = 'transform 0.3s ease-in-out'; // Enable transition
    carouselSlide.style.transform = `translateX(${-slideWidth * (counter - 1)}px)`; // Transition to the previous slide
    counter--;
  }
});

