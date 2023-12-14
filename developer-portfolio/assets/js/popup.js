window.onload = function () {
	// Show the pop-up message using a custom dialog
	var popupMessage =
		"Whoopsie-daisy! 🙈 We're currently giving our site a makeover. Swing by again soon for a fancier experience! Thanks for your patience! 🚀";

	// Display the custom confirm dialog
	var popup = confirm(popupMessage);
	p;
	// If the user clicks "OK," no further action needed
	if (!popup) {
		// If the user clicks "Cancel," close the pop-up window

		window.close();
	}
};
