let a = 8;

function listNumber (numb) {
	let arr = [];
	while (numb <=15 ) {
		arr.push(numb);
		numb++;
	}
	return console.log(arr);
}

switch (a) {
	case 1:
		console.log(listNumber(a));
		break;
	case 2:
		console.log(listNumber(a));
		break;
	case 3:
		console.log(listNumber(a));
		break;
	case 4:
		console.log(listNumber(a));
		break;
	case 5:
		console.log(listNumber(a));
		break;
	case 6:
		console.log(listNumber(a));
		break;
	case 7:
		console.log(listNumber(a));
		break;
	case 8:
		console.log(listNumber(a));
		break;
	case 9:
		console.log(listNumber(a));
		break;
	case 10:
		console.log(listNumber(a));
		break;
	case 11:
		console.log(listNumber(a));
		break;
	case 12:
		console.log(listNumber(a));
		break;
	case 13:
		console.log(listNumber(a));
		break;
	case 14:
		console.log(listNumber(a));
		break;
	case 15:
		console.log(listNumber(a));
		break;
	default:
		console.log('Вы ввели 0 или недопустимое значение');
		break;
}