let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterRange(array, 3, 8));


function filterRange(array, a, b) {
	let newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] >= a && array[i] <= b) newArray.push(array[i]);
	}
	return newArray;
}