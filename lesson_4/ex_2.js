let shopGoods = [];

class goods {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

shopGoods.push(new goods('Iphone', 800));
shopGoods.push(new goods('Huawei', 400));
shopGoods.push(new goods('Nokia', 100));
shopGoods.push(new goods('Samsung', 650));
shopGoods.push(new goods('Alcatel', 50));

function countBasketPrice(arr, ...key) {

	let sum = 0;
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (key[j] == arr[i].name) {
			sum += arr[i].price;
			j++;
		}
	}

	return sum
};

console.log(countBasketPrice(shopGoods, 'Iphone', 'Nokia', 'Samsung'));