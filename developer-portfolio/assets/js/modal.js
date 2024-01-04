function openModal() {
	var modal = document.getElementById('custom-modal');
	var overlay = document.getElementById('modal-overlay');

	// Check if the elements exist
	if (modal) {
		modal.style.display = 'none';
		overlay.style.display = 'none';

		// Close the modal automatically after 3 seconds
		setTimeout(function () {
			closeModal();
		}, 3000);
	} else {
		console.error('Modal or overlay element not found.');
	}
}

function closeModal() {
	var modal = document.getElementById('custom-modal');
	var overlay = document.getElementById('modal-overlay');

	// Check if the elements exist
	if (modal) {
		modal.style.display = 'none';
	}
	if (overlay) {
		overlay.style.display = 'none';
	}
}
