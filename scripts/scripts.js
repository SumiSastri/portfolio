const openModalButtons = document.querySelectorAll('[data-modal-target]');
// console.log(openModalButtons);
const closeModalButtons = document.querySelectorAll('[data-close-button]');
// console.log(closeModalButtons);

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    // console.log(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
}

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
