var main = function () {

	var tabNames = ["Home", "How Its Used", "Pros/Cons", "My Question", "Works Cited"];

	for (var counter = 1; counter <= tabNames.length; counter++) {
		document.getElementById("tab" + counter).innerHTML = tabNames[counter - 1];
	}
};

$(document).ready(main);