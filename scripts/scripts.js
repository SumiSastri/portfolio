// Get DOM Elements by id attributes
const modal = document.querySelector('#cv-modal');
const modalBtn = document.querySelector('#modal-btn');
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
