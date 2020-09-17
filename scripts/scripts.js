// function declaration
function parallaxEffect(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener('scroll', function () {
  // function call
  parralaxEffect('.nav-bar-items', window.scrollY, 1);
  parralaxEffect('.intro', window.scrollY, 2);
});

const textToType = ['What makes me a happy developer?'];
let textCount = 0;
let textCharacters = 0;
let currentText = '';
let letter = '';
// IFFY - self invoked function - function declaration and invocation at the same time
(function type() {
  if (textCount === textToType.length) {
    textCount = 0;
  }
  currentText = textToType[textCount];
  letter = currentText.slice(0, ++textCharacters);
  document.querySelector('.typing-effect').textContent = letter;
  if (letter.length === currentText.length) {
    textCount++;
    textIndex = 0;
  }
  setTimeout(type, 100);
})();

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
