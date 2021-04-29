

// Задание 1

let name = prompt('Ваше имя');
let age = prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt('Телефон');
let email = prompt('Почта');
let company = prompt('Место работы');

alert(`Меня зовут ${name}. Мне ${age} лет.
 	Я проживаю в городе ${city} и работаю в компнаии ${company}.
 	Мои контактнеы данные:
	Почта ${email} и телефон ${phone}`);

// Задание 2

let birth = 2021 - age;
alert(`${name} родился ${birth}`);

//Задание 3

let num = '123456';

if ((num[1] + num[2] + num[3]) === (num[4] + num[5] + num[6])) {
	console.log('Верно!')
}
else {
	console.log('Неверно')
};

//Задание 4

let a = 1
if (a > 0) {
	console.log('Верно')
}
else {
	console.log('Неверно')
}

// Задание 5
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
let sum = a + b
if (sum > 1) {
	let result = Math.pow(sum, 2)
	console.log(result)
};

// Задание 6
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
	console.log('Верно')
}
else {
	console.log('Неверно')
}


