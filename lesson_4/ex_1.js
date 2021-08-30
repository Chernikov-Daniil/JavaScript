'use strict'

function transformNumber(numb) {
	const category = {};
	if (numb > 999) {
		console.log("Введенное число больше 999" + ' ' + category)
	} else {
	category.unit = numb % 10;
	category.tens = Math.floor((numb % 100) / 10);
	category.hundred = Math.floor(numb / 100);
	}
	return console.log(category);
};

transformNumber(364);