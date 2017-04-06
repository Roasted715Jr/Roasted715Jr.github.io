var main = function () {

	var tabNames = ["Home", "How Its Used", "Pros/Cons", "My Question", "Works Cited"];

	//We do "counter < tabNames.length" since naturally the length will be 1 greater than the highest index # in the array
	for (var counter = 1; counter < tabNames.length; counter++) {
		document.getElementById("tab" + counter).innerHTML = tabNames[counter - 1];
	}
};

$(document).ready(main);