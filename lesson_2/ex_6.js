function sum (a, b) {
	return a + b;
}

function diff (a, b) {
	return a - b;
}

function mult (a, b) {
	return a * b;
}

function div (a, b) {
	return Math.round(parseFloat(a / b) * 100) / 100;;
}

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case "сумма":
			return console.log(sum(arg1, arg2));
			break;
		case "разность":
			return console.log(diff(arg1, arg2));
			break;
		case "умножение":
			return console.log(mult(arg1, arg2));
			break;
		case "деление":
			return console.log(div(arg1, arg2));
			break;
		default:
			console.log("Неправильно выбрана операция!");
			break;
	}
}

mathOperation(2, 9, "умножение");