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

console.log (sum(2, 3));
console.log (diff(2, 3));
console.log (mult(2, 3));
console.log (div(2, 3));