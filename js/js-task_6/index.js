/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str1 = 'aaa@bbb@ccc';
console.log("Task 1 - "+ str1.replace(/@/g, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date1 = '2025-12-31';
let date2 = date1.replace(/(2025)-(12)-(31)/, '$3 $2 $1');
console.log("Task 2 - "+ date2.replace(' ', '/'));

/* 3.Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice). */

let str3 = 'Я учу javascript!';
console.log("Task 3 - "+ str3.substr(2, 14)); //substr(откуда отрезать, сколько отрезать)
console.log(str3.substring(2, 16)); //substring(откуда отрезать, докуда отрезать)
console.log(str3.slice(2, 16)); //slice(откуда отрезать, докуда отрезать)

/*4.Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let mas = [4, 2, 5, 19, 13, 0, 10];
let sum = 0, result = 0;
for(let i = 0;i <= mas.length-1; i++){
    result = Math.sqrt(sum += Math.pow(mas[i],3));
}
console.log("Task 4 - "+ result);

/*5.Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */
let a = +prompt("Введите a ");
let b = +prompt("Введите b ");
let c = Math.abs(a - b);
console.log("Task 5 - " + c); 

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */

 let date = new Date();
 
 function addZero(num){
     if(num > 0 && num < 10){
         return '0' + num;
        }
        else{
            return num;
        }
    }
    
console.log("Task 6 - "+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' 
    + addZero(date.getDate()) + '.' + addZero(date.getMonth()+ 1) + '.' + date.getFullYear());

/*7.Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */

let str7 = 'aa aba abba abbba abca abea';
console.log("Task 7 -" + str7);
console.log(str7.match(/ab{1,}a/g));

/*8.Дана почта пользователя test@mail.ru (можно использовать любую)
Написать ф-цию, которая принимает почту и возвращает из нее логин -
слово до знака @ */

let str8 = 'test@mail.ru';
console.log("Task 8 - "+ str8.substr(0, 4)); //substr(откуда отрезать, сколько отрезать)

/*9. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

/*10. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки;
    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени;
    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
    не может быть длиной менее 2 и более 11 символов.
   
    Функция должна возвращать true или false. Используйте регулярные
    выражения. */