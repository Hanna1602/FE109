function basicOp(operation, value1, value2){
    {
        if(operation == '+'){
          return value1 + value2
          } else if (operation == '-'){
          return value1 - value2
          } else if (operation == '*'){
          return value1 * value2
          } else if (operation == '/'){
          return value1 / value2
          }
      }
}

function bonusTime(salary, bonus) {
    if(bonus == true){
        return '£'+salary * 10
        } else if (bonus == false){
        return '£'+salary
        } 
}

function getGrade (s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3
    if(x >= 90 && x <= 100){
          return 'A'
          } else if (x >= 80 && x <= 90){
          return 'B'
          } else if (x >= 70 && x <= 80){
          return 'C'
          } else if (x >= 60 && x <= 70){
          return 'D'
          } else if (x >= 0 && x <= 60){
          return 'F'
          } 
}


/*7. Ваша задача - создать функцию, выполняющую четыре основные математические операции.
   Функция должна принимать три аргумента - операцию(string), значение1(number), значение2(number).
   Функция должна возвращать результат чисел после применения выбранной операции.
   ```
   basicOp('+', 4, 7)         // Output: 11
   basicOp('-', 15, 18)       // Output: -3
   basicOp('*', 5, 5)         // Output: 25
   basicOp('/', 49, 7)        // Output: 7
    ```
    [kata link](https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript)
8. Время бонусов в большом городе! Толстосумы потирают лапы в предвкушении... но кто заработает больше всего денег?
   
   Постройте функцию, которая принимает два аргумента (зарплата, бонус). Зарплата будет целым числом, а бонус - булевым.
   
   Если бонус верен, то зарплата должна быть умножена на 10. 
   Если бонус ложный, то толстосум не заработал достаточно денег и должен получить только заявленную зарплату.
   Ниже приведен пример результата выполнения функции
   ```
   bonusTime(2, true) вернет-> '£20'
   bonusTime(78, false) вернет-> '£78'
   bonusTime(67890, true) вернет->  '£678900'
   ```
    [kata link](https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript)
9. Вам нужно выставить оценку в аттестате успеваемости. 
    Завершите функцию так, чтобы она нашла среднее значение трех переданных ей оценок и вернула буквенное значение, связанное с этой оценкой.
   
    [kata link](https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript)
*/