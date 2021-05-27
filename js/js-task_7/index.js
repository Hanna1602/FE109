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

/*Вагончик с мороженкой */

let ice_cream = function(){
    
    this.get = function(){
        
        alert('Добро пожаловать!');
        this.a = prompt('Выберите в чем вы хотетите мороженку: рожок, стаканчик');
        this.b = prompt('Выберите кол-во шариков (max 3)');

        this.operation_second();

    }

    this.operation_first = function(){
        
        switch(this.a){
            case 'рожок':
                document.write('<br>'+'\_/');
            break;
            case 'стаканчик':
                document.write('<br>'+'|__|');
            break;
            default: this.result = 0;
        }


    }

    this.operation_second = function(){
        
        switch(this.b){
            case '1':
                document.write('@');
            break;
            case '2':
                document.write('@@');
            break;
            case '3':
                document.write('@');
                document.write('@@');
            break;
            default: this.result = 0;
        }

        this.operation_first();
    }


}

let Ice_cream = new ice_cream();
Ice_cream.get(); 