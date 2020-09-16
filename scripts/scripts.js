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
// select nodes by class name and by ids
let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  current = 0;

// Function declaration - remove display of image when shuffle through images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Function call - reset function first clear images then display first
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Function call - reset function - function declaration left arrow minus indices
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Function call - reset function - function declaration right arrow - plus indices
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click function call of the slide left
arrowLeft.addEventListener('click', function () {
  // first check position in the node list - is it at zero - starting point
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click function call of the slide right - reverses the image back to start if current is at the last image then slide right
arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
// function call of start slide
startSlide();
