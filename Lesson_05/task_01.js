function makeBuffer() {
	let value = "";
	function buffer() {
		return value;
	}
	buffer.add = function(input) {
		if (isNaN(input))
			value += input + " ";
		else
			value += input;
	}
	buffer.print = function() {
		return value;
	}
	buffer.clear = function(){
		value = "";
	}
	return buffer;
}

var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');
console.log(buffer.print());
console.log(buffer());

var buffer = makeBuffer();

buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log(buffer.print());
console.log(buffer());

var buffer = makeBuffer();
buffer.add("Тест");
buffer.add("тебе не з'їсть");
alert(buffer.print()); // Тест тебе не з'їсть
buffer.clear ();
alert (buffer.print());
