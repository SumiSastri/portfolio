// Get DOM Elements by id attributes
const modal = document.querySelector('#data-cv-modal');
const modalBtn = document.querySelector('#data-cv-modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  console.log(123);
  //   change from display none in css to display block
  modal.style.display = 'block';
}

// Close
function closeModal() {
  console.log(123);
  //   change back to none
  modal.style.display = 'none';
}
// disable ability to click close outside the modal area
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
// second modal - portfolio
const portfolioModal = document.querySelector('#data-portfolioModal');
const openPortfolioModalBtn = document.querySelector(
  '#data-portfolio-modal-btn'
);
const closePortfolioModalBtn = document.querySelector(
  '.close-portfolio-modal-btn'
);

openPortfolioModalBtn.addEventListener('click', openPortfolioModal);
closePortfolioModalBtn.addEventListener('click', closePortfolioModal);

function openPortfolioModal() {
  console.log(234);
  portfolioModal.style.display = 'block';
}
function closePortfolioModal() {
  portfolioModal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == portfolioModal) {
    portfolioModal.style.display = 'none';
  }
}
// Modal content now an image slider
let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
