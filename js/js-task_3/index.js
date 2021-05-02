// 1

let i = 1;
do {
    console.log("a = "+i);
    i++;
} while (i <= 50);

i = 35;
do {
    console.log("i = "+i);
    i--;
} while (i >= 8);

// 2

i = 89;
for (; i >= 11; i--) {
    document.write(i + "</br>");
}

// 3

i, sum = 0;

for (i = 0; i <= 100; i++) {
    sum += i;
}

console.log("ZADANIE 3 \n"+sum);

// 4 

sum = 0;

for (i = 1; i <= 5; i++) {
    sum+=i
}
console.log("ZADANIE 4 \n"+sum);

// 5

for (i = 8; i <= 56; i++) {
    if (i % 2 == 0)
    console.log(i);
}


i = 8;

while (i <= 56) {
    i++;
    if (i % 2 ==0)
    console.log(i);
}

// 6

for (i = 2; i <= 10; i++) 
    for (j = 1; j <= 10; j++) {
    console.log(i +"*"+ j + "=" +(i * j));
}


// 7 

let n = 1000; num = 0;

while (true) {
    if (n >= 50) {
        n = n / 2;
        num ++; 
    }
        else {
            break;
        }
    }
console.log(n, num);

// 8 

let agNum = 0;
    num,
    sum = 0,
    i = 0;

while (true) {
    num = +prompt("Введите число");
    if (num == 0) { // при пробеле, пустой строке, cancel
        break;
    }
    sum+=num;
    i++;
    console.log(num +" " + sum+ " " + i);
}
console.log("Сумма " + sum + " Среднее " + sum/i);

// 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arrStr = str.split(" "); // преобразовывается в массив
let max = arrStr[0], min = arrStr[0];
for (i = 0; i < arrStr.length; i++)  {
    if (arrStr[i] > max) {
        max = arrStr[i]
    }
    if (arrStr[i] < min) {
        min = arrStr[i]
    }
}
console.log(`MAX ${max}, MIN ${min}`);

// 10

str = prompt("Введите число");
sum = 0;
arrStr = str.split("");
for (i = 0; i < arrStr.length; i++) {
    sum += +arrStr[i];
}
console.log ("число: "+str);
rev = arrStr.reverse().join("");

console.log("цифр в числе: "+arrStr.length+ "\nСумма чисел массива: "+sum+"\nОбратный порядок: "+rev);