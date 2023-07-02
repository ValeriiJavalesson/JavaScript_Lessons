let admin;
let password;

admin = "Admin";
password = "TheMaster";

if (admin == "Admin") {
	if (password == "TheMaster") { console.log("Welcome!"); }
	else if (password == undefined) { console.log("Canceled"); }
	else console.log("Wrong passwod");
}
else if (admin == undefined) console.log("Canceled");
else console.log("I don't know you");