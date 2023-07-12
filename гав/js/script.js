let jumpButtons = document.querySelectorAll('[data-jump]');

jumpButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		let block = document.querySelector(`#${button.dataset.jump}`);

		block.scrollIntoView({
			"behavior": "smooth",
			"block": "start"
		})
	});
});