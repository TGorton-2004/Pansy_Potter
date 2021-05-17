/*
- JavaScripts for Cafe Carla -
- Created by Thomas Gorton -
*/

function setCookie() {
	
	var confirmMsg = "This website uses Cookies. \nClick OK to accept, Cancel to reject."
	var cookiesAccepted = confirm(confirmMsg);
	
	if(cookiesAccepted) {
		alert("Thank You");
	}
	
	else {
		alert("You can only view this website if you accept cookies, you will now be redirected to Google. Goodbye!");
		location.href = 'http://www.google.com';
	}

}

// Function to change the theme to Light Mode
function setLightTheme() {
	document.getElementById("stylesheet").href = "css/style.css";
	localStorage.setItem('theme', 'css/style.css');
}

// Function to change the theme to Dark Mode
function setDarkTheme() {
	document.getElementById("stylesheet").href = "css/dark.css";
	localStorage.setItem('theme', 'css/dark.css');
}

// Saving User Theme
function getCurrentTheme() {
	var theme = localStorage.getItem('theme');
	if (theme=="css/dark.css") {
	document.getElementById("stylesheet").href = "css/dark.css";
	}
}
