$(document).ready(() => {
	//Add this to main.js later
	$("#includeHeader").load("https://roasted715jr.github.io/header.html", function () {
		//alert("The document was loaded");
	});

	const button = $("#btn");
	const textBox = $("#txtBox");

	button.on("click", () => {
		//alert("Ouch");
		alert(textBox.prop("value"));
	});
});