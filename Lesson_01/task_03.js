let admin;
let password;

admin = "Admin";
password = "TheMaster";


switch (admin) {
	case "Admin": {
		switch (password) {
			case "TheMaster": {
				console.log("Welcome!");
				break;
			}
			case undefined: {
				console.log("Canceled");
				break;
			}
			default: {
				console.log("Wrong passwod");
				break;
			}
		}
		break;
	}
	case undefined: {
		console.log("Canceled");
		break;
	}
	default: {
		console.log("I don't know you");
		break;
	}
}
