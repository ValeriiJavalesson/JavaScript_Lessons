let user = {};

user.name = 'ПИЛИП';
user.surname = 'ШЕВЧЕНКО';
showUser(user);

user.name = 'СЕРГІЙ';
showUser(user);

delete user.name;
showUser(user);

function showUser(anyUser) {
	for (prop in anyUser) {
		console.log(prop + ': ' + anyUser[prop]);
	}
	console.log();
}