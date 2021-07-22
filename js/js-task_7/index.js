/*Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.*/

let Calc = function(){
    
    this.get = function(){
       
        this.a = prompt('Введите число a');
        this.b = prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.operation();

    }

    this.operation = function(){
        
        switch(this.oper){
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    }

    this.show =  function(){
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    }    
}

let calc = new Calc();
calc.get();

