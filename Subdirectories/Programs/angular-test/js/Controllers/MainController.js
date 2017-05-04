/*
var answer = prompt("What would you like to do?\nAdd a contact\nRemove a contact\nList all your contacts\nSearch for a contact\n");
	
var actions = ["add a contact", "remove a contact", "list all your contacts", "search for a contact"];
	
answer = answer.toLowerCase();
//console.log(answer);
for (var key in actions){
	if (answer = actions[key]) {
		console.log(key);
		console.log("User has answered");
	}
}
	
//Create a class "Contact" with properties of "firstName", "lastName", "phoneNumber", "email", and "address"
function Contact(firstName, lastName, phoneNumber, email, address) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.email = email;
	this.address = address;
}
	
//Create an array to hold all of our contacts
var contacts = [];
	
//Create a function to show our whole contacts list
var listContacts = function() {
	for (var key in contacts) {
		//"parseInt()" is used to parse a string as a number since "key" is a string
		var x = parseInt(key) + 1;
		console.log("Contact #" + x + ": " + contacts[key].firstName + " " + contacts[key].lastName +
				"\nPhone Number: " + contacts[key].phoneNumber + "\nEmail: " + contacts[key].email +
				"\nAddress: " + contacts[key].address + "\n");
	}
};
	
var search = function(lastName) {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
	    if (lastName === contacts[i].lastName) {
	        printPerson(contacts[i]);
	    }
	}
};
	
function printContact(person) {
	console.log(person.firstName + " " + person.lastName);
}
	
//Create a function to add someone to our contacts array
var addToContacts = function(person) {
	//We do "contacts.length" because this number will always be exactly 1 higher than the greatest index in the array
	contacts[contacts.length] = person;
};
	
var add = function(firstName, lastName, email, phoneNumber, address) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.phoneNumber = phoneNumber;
	this.address= address
	addToContacts(this);
};
*/

app.controller('MainController', ['$scope', function ($scope) {
	$scope.name = "Matthew Duphily";
}]);
