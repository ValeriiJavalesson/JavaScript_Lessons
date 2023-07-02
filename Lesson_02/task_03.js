console.log(calculation(5, '+', 9));
console.log();
console.log(calculation(5, '-', 9));
console.log();
console.log(calculation(5, '*', 9));
console.log();
console.log(calculation(45, '/', 9));
console.log();
console.log(calculation(5, 9, 9)); //Operation is not correct
console.log();
console.log(calculation('s', 9, 9));//One of input values is not a number
console.log();
console.log(calculation(5, '/', 0));//Division by 0



function calculation(x, operation, y) {
	try {
		if (isNaN(x) || isNaN(y)) throw "One of input values is not a number";
		else if (y == 0 && operation == "/") throw "Division by 0 is impossible";
		else
			switch (operation) {
				case '+': {
					return (x + y);
				}
				case '-': {
					return (x - y);
				}
				case '*': {
					return (x * y);
				}
				case '/': {
					return (x / y);
				}
				default: {
					return("Operation is not correct");
				}
			}
	} catch (Err) {
		return(Err);
	}
}