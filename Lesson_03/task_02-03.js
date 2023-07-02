let styles = ['Jazz', 'Blues'];
console.log(styles);
console.log('-----------------');

styles.push('Rock-n-Roll');
console.log(styles);
console.log('-----------------');

styles.splice(-2, 1, 'Classic');
console.log(styles);
console.log('-----------------');

console.log(styles.shift());
console.log('-----------------');

styles.unshift('Rap', 'Reggie');
console.log(styles);
console.log('-----------------');

console.log(find(styles, 'Classic'));
console.log(find(styles, 'House'));


function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) return i;
	}
	return -1;
}
