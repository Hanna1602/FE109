/* 1.Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.*/

function task_first (a,b,c){
    let answer = 0;
    answer = (a-b)/c;
    console.log("Task 1 - "+answer);
}

task_first (8,2,3);


/* 2.Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.*/

function task_second(d)
{
    let cube = 0,
    square = 0;
    cube = d*d*d;
    square = d*d;
    console.log("Task 2 - cube - "+ cube +"\n\t square - "+ square);
}

task_second(3);
/* 3.Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/
alert("Task 3");
let a=Number(prompt("Введите a"));
let b=Number(prompt("Введите b")); 
min_max(a,b);
function min_max(a,b){
    if(a > b){
        document.write("Task 3 - большее число a = "+ a +" меньшее число b = "+ b);
    }
    if(a < b){
        document.write("Task 3 - большее число b = "+ b +" меньшее число a = "+ a); 
    }
    if (a == b){
        document.write("Task 3 - значения равны"); 
    }

}


/* 4.Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.*/
alert("Task 4");
let n=Number(prompt("Введите диапазон для массива")); 
function task_four(n){
    let array = [];
    for( let i = 1; i<=n; i++){
        array[i]= Number(prompt("Введите число"));
        
    }
    print_arr(array);
}
function print_arr(array){
    document.write("<br> Task 4 - ");
    for( let i = 1; i<=n; i++){
    document.write(array[i]+ " "); 
    }
}
task_four(n);
/* 5.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.*/
var num = 0;
function isEven(num){
    num = Number(prompt("Введите число"));
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
alert("Task 5");
console.log("Task 5 - "+ isEven(num));
/* 6.Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/

let arrEven = [];
function new_arr_even(arg){
    for( let i = 1; i <= arg; i++){
        if(isEven(i) == true){
            arrEven.push(i);
        } 
    }
    return arrEven;
}
alert("Task 6");
console.log("Task 6 - " + new_arr_even(10));

/* 7.Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы)*/

 
/* 8.Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл. */
console.log("Task 8")
function printArray(array){
    console.log(array[i]);
    i++;
    if (i < array.length) printArray(array);
}
var i = 0;
printArray([2, -7, 8, 23, 56, -3, 14, 5]);
/* 9. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/
