// Задание 1
arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

// Задание 2

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
result = arr.filter(item => item < 0);
console.log(result);
for (i = 0; i < result.length; i++) {
	if (result[i] > -10 && result[i] < -3) {
		console.log(result[i]);
	};

};

// Задание 3

arr = [];
result = 0;
for (i = 23; i <= 57; i++) {
	arr.push(i);
	for (i = 0; i < arr.length; i++) result += i
};
console.log(result);
// Задание 4

arr = ['10', '20', '30', '50', '235', '3000'];
for (i = 0; i < arr.length; i++) {
	if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) console.log(arr[i]);
};

// Задание 5

arr = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
for (i = 0; i < arr.length; i++) {
	if (arr[i] == 'СУББОТА' || arr[i] == 'ВОСКРЕСЕНЬЕ') {
		;
		document.write(arr[i].bold() + ' ');
	}
	else {
		document.write(arr[i] + ' ');
	}

};

// Задание 6

arr = [4, false, true, 'ok', ' ',];
console.log(arr);
arr[arr.length] = 1000000;
console.log(arr[5]);

// Задание 7

arr = [];
while (true) {
	let prom = prompt('Введите пару чисел')
	arr.push(prom)
	if (prom == '') break

};
arr.sort((a, b) => a - b);
console.log(arr);

// Задание 8

arr = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr);
arrReverse = [];
i = 0;
while (i < arr.length) {
	arrReverse.unshift(arr[i]);
	i++;

}
console.log(arrReverse);

// Задание 9
arr = [5, 9, 21, , , 9, 78, , , , 6,];
sum = 0;
for (i = 0; i < arr.length; i++) {
	if (arr[i] == undefined) console.log(sum += arr[i]);
};

// Задание 10

arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let zero = arr.indexOf(0);
let secondZero = arr.lastIndexOf(0);
sum = 0;

if (zero != secondZero) {
	for (i = zero; i <= secondZero; i++) {
		sum += arr[i];
		console.log(sum);
	};
}
else if (zero = secondZero) {
	console.log(0);
};

// Задание 11

let enter = prompt('Какой уровень елочки?')
i = 0,
	j = 0;
// Желаемое количество строк
let max = enter;
let space = "",
	star = "";

while (i < max) {
	space = "";
	star = "";
	for (j = 0; j < max - i; j++) space += " ";
	for (j = 0; j < 2 * i + 1; j++) star += "*";
	console.log(space + star);
	i++;
}

