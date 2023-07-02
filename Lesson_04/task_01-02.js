var arr = [29, -78, 58, -26, 31, 34, -29, 0, 22, -80, 60, 7, -1, -6, -32, -83, 58, 94, -39, 93, -26, 5, 10, -53, 75, 66, 86, -97, 77, 45, 28, -89];

console.log('---------------');
arr.sort(compareNumeric);
console.log(arr);
console.log('---------------');
arr.sort(compareNumeric).reverse();
console.log(arr);
console.log('---------------');
let positiveNumbersArray = arr.filter(getPositive).sort(compareNumeric);
console.log(positiveNumbersArray);
console.log('---------------');
let negativeNumbersArray = arr.filter(getNegative).sort(compareNumeric);
console.log(negativeNumbersArray);
console.log('---------------');



function compareNumeric(a, b) {
	return a - b;
}

function positiveNumbers() {
	return -1;
}

function getPositive(number) {
	return number >= 0;
}

function getNegative(number) {
	return number < 0;
}
