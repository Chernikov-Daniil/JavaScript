function power(val, pow) {
	if (pow <= 1) return val;
	return power(val, pow - 1) * val;
}

console.log(power(3, 3));