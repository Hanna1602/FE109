// Задание 1

i = 0
while (i < 50) {
	i++
	console.log(i)
}
for (i = 35; i >= 8; i--) {
	console.log(i)
}

// Задание 2

i = 89
while (i > 11) {
	i--
	document.write(i + '<br/>')

}

// Задание 3

i = 0
sum = 0
for (i = 0; i <= 100; i++) {
	sum += i
	console.log(sum)
}

// Задание 4 

sum = 0
for (i = 1; i <= 5; i++) {
	sum += i
	console.log(sum)

}

// Задание 5

i = 8
while (i <= 56) {
	i++
	if (i % 2 == 0) console.log('Четные числа: ' + i + '')

}
for (i = 8; i <= 56; i++) {
	if (i % 2 == 0) console.log(i)
}

// Задание 6
for (i = 2; i <= 10; i++) {
	for (let a = 1; a <= 10; a++) {
		let sum = i * a
		document.write(`${i} x  ${a} = ${sum} <br/> `)
	}

}

// Задание 7

let n = 1000, num = 0
while (true) {
	if (n >= 50) {
		num++
		n = n / 2
	}
	else {
		break
	}
}
console.log(n, num)

// Задание 8

sum = 0
i = 0
while (true) {
	let prom = +prompt('Введите число')
	if (isNaN(prom)) {
		alert('Необходимо ввести число!')
	}
	else if (prom == 0) {
		break
	}
	else {
		sum += prom
		i++
	}
}
console.log('Сумма:' + sum + 'Среднее:' + sum / i)

// Задание 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'
let arr = str.split(" ")
let max = arr[0]
let min = arr[0]
for (let i = 0; i < arr.length; i++) {

	if (arr[i] > max) {
		max = arr[i]
	}
	if (arr[i] < min) {
		min = arr[i]
	}
}
console.log(min, max)

// Задание 10

let enter = prompt('Введите число')
let arrEnter = enter.split(' ')
alert("Цифры в числе" + ' ' + arrEnter)
i = 0
sum = 0
let numbers = arrEnter.length
alert('Количество цифр' + ' ' + numbers)
for (i = 0; i <= arrEnter.length; i++) {
	sum += i
}
alert('Сумма' + ' ' + sum)

let arrReverse = arrEnter.reverse()
alert('Обратный порядок' + ' ' + arrReverse)


