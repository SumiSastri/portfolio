// type effect
const textToType = [ 'What makes me a happy developer?' ];
let textCount = 0;
let textCharacters = 0;
let currentText = '';
let letter = '';
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

// modals
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

const openModal = (modal) => {
	if (modal == null) return;
	modal.classList.add('active');
};

const closeModal = (modal) => {
	if (modal == null) return;
	modal.classList.remove('active');
};
