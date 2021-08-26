let price = [25, 200, 34, 62, 58, 89, 965, 81, 9, 13];

function countBasketPrice(arr) {

	let sum = 0;
	arr.forEach(element => {
		sum += element;
	});

	return sum 
};

console.log(countBasketPrice(price));