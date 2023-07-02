
let str = 'my-short-string-and-one-letter-q';
console.log('--------------');
console.log(str);
console.log('--------------');
console.log(camelize(str));





function camelize(str) {
	let wordsArray = str.split('-');
	for (i = 1; i < wordsArray.length; i++) {
		wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
	}
	return wordsArray.join('');
}