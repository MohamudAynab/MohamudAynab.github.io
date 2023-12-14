window.onload = function () {
	// This will show pop-message
	var popup = confirm(
		"Whoopsie-daisy! 🙈 We're currently giving our site a makeover. Swing by again soon for a fancier experience! Thanks for your patience! 🚀",
	);

	var closeButton = document.getElementById('closeButton');

	//adding a click event to the Close Button
	closeButton.addEventListener('click', function () {
		//Close the popup
		window.close();
	});

};
