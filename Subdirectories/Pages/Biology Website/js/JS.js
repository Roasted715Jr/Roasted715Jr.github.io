var main = function () {

	var tabNames = ["Home", "How Its Used", "Pros/Cons", "My Question", "Works Cited"];
	
	document.getElementById("tab1").innerHTML = tabNames[0];
	document.getElementById("tab2").innerHTML = tabNames[1];
	document.getElementById("tab3").innerHTML = tabNames[2];
	document.getElementById("tab4").innerHTML = tabNames[3];
	document.getElementById("tab5").innerHTML = tabNames[4];
};

$(document).ready(main);