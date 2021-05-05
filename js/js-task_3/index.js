// №1 Выведите числа от 1 до 50 и от 35 до 8

for(let i = 0; i <= 50 ; i++){
    console.log(i);
}

for(let j = 35; j >= 8; j--){
    console.log(j);
}

/* №2 Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите 
числа тегом <br/> друг от друга, чтобы получить столбец, а не строку */

let a = 89;
while(89 >= 11){
    document.write(a + "<br>");
    a--;
}

/* №3 С помощью цикла найти сумму чисел от 0 до 100 */

let sum = 0;
for(let i = 0; i <= 100; i++){
    sum +=i;
}
console.log("Task 3 - sum = " + sum);

/* №4  Найти сумму чисел в каждом числе от 1 до 5 */

let velue = prompt('Введите число от 1 до 5');
switch(value){
    case 1:
        console.log("Task 4 - sum = " + 1);
    break;
    case 2:
        for(let value = 0; value <= 2; value++){
            sum +=value;
        }
        console.log("Task 4 - sum = " + sum);
    break;
    case 3:
        for(let value = 0; value <= 3; value++){
            sum +=value;
        }
        console.log("Task 4 - sum = " + sum);
    break;
    case 4:
        for(let value = 0; value <= 4; value++){
            sum +=value;
        }
        console.log("Task 4 - sum = " + sum);
    break;
    case 5:
        for(let value = 0; value <= 5; value++){
            sum +=value;
        }
        console.log("Task 4 - sum = " + sum);
    break;

}

/* №5  Выведите четные числа от 8 до 56 */
    let i = 8;
    while(i<=56){
        i++;
        if(i % 2 == 0)
        {
            console.log("Task 5 -" + i );
        }
    }

    for(let i = 8; i <= 56; i++){
        if(i % 2 == 0)
        {
            console.log("Task 5 -" + i );
        }
    }

/* №6  Вывести на экран таблицу умножения от 2 до 10 */

    for(let i = 2; i <= 10; i++ ){
        for(let j = 1; i <= 10; j++){
            console.log(i + "*" + j + "=" + (i*j));
        }
    }

/* №7 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.  */

    let n = 1000, num = 0;
    while(true){
        if(n >= 50){
            n = n / 2;
            num++;
        }
        else {
            break;
        }
    }
    console.log("Task 7 - n = " + n + "num = " + num);

/* №8  Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение. */

    let agNum = 0,
        Num = 0,
        Sum = 0,
        k = 0;
    while(true){
        Num = +prompt("Введите число");
        if(Num == 0){ // при пробеле, пустой строке, cancel
            break;
        }
        Sum += Num;
        k++;
        console.log(Num +" "+ Sum +" "+ k);
    }
    console.log("Task 8 - "+ "Суммы: "+ Sum + " Среднее: "+ sum/k);

/* №9  Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл. */

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arrStr = str.split(" "); // преобразование в массив
let max = arrStr[0], min = arrStr[0];
for(let i = 0; i < arrStr.length; i++){
    if(arrStr[i] > max){
        max = arrStr[i];
    }
    if(arrStr[i] < min){
        min = arrStr[i];
    }
}
console.log(`MAX ${max}, MIN ${min}`);

/* №10  Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный. */

str = prompt("Введите число");
let summa  = 0;
arrStr = str.split(" ");
for(let i = 0; i < arrStr.length; i++){
    summa += +arrStr[i];
}
console.log("Task 10 -" + "число: "+str);
rev = arrStr.reverse().join("");
console.log("цифр в числе: "+ arrStr.length+ "\n Сумма чисел массива: "+ summa + "\n Обратный порядок: "+ rev);



 