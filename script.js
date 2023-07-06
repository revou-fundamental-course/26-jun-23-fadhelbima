const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

//Slide 
const sliderContainer = document.querySelector('.slider-container');
const images = Array.from(sliderContainer.children);

// Set initial position
let currentIndex = 0;
let slideWidth = sliderContainer.clientWidth;

// Arrange images side by side
images.forEach((image, index) => {
  image.style.left = `${index * slideWidth}px`;
});

// Function to slide to the next image
function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  slide();
}

// Function to slide to the previous image
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  slide();
}

// Function to slide the images
function slide() {
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Automatically slide to the next image every 3 seconds
setInterval(nextSlide, 3000);

