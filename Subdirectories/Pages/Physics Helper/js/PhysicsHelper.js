$(document).ready(() => {
	//Add this to main.js later
	$("#includeHeader").load("https://roasted715jr.github.io/header.html", function () {
		//alert("The document was loaded");
	});

	const ffBtn = $("#ffButton");
	const deltaYTxtBox = $("#deltaY");

	let deltaY = null;
	let Voy = null;
	let Vy = null;

	ffBtn.on("click", () => {
		//alert("Ouch");
		//alert(textBox.prop("value"));
		
		deltaY = deltaYTxtBox.prop("value");
		alert(deltaY);
	});
});