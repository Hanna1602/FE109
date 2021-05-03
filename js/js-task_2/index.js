// 1

let firstname = prompt('Как Вас зовут?'),
    age = prompt('Сколько Вам лет?'),
    city = prompt('Из какого Вы города?'),
    phone = prompt('Напишите свой номер телефона'),
    email = prompt('И свой имэйл'),
    company = prompt('Где Вы работаете?');

console.log("Меня зовут "+firstname+". Мне "+age+" лет.\nЯ проживаю в городе "+city+" и работаю в компании "+company+".\nМои контактные данные:\n"+phone+", "+email+".");

// 2

let year = 2021 - age;

alert(firstname+" родился в "+year+" году.");

// 3

let str = prompt("Введите 6 цифр");
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
    console.log("Верно");
} else  {
    console.log("Не верно");
}


// 4

let a4 = -1;
let answer4 = (a4 > 0) ? "Да" : "Нет";

console.log (answer4);

// 5

let a5 = 10,
    b5 = 2;
    sum = a5 + b5,
    diff = a5 - b5,
    prod = a5 * b5,
    quot = a5 / b5;


console.log ("Сумма = "+sum+",\nРазность = "+diff+",\nПроизведение = "+prod+",\nЧастное = "+quot) 
    if (sum > 0) {
        console.log("Во второй степени: "+sum**2);
    }

// 6

if ((a5 > 2 && a5 < 11) || (b5 >= 6 && b5 < 14)) {
    console.log("Верно");
} else {
    console.log("Не верно");
}


 