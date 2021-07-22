/*function Person(first, last,age, gender){
    this.name = {
        first,
        last,
    };

    this.age = age;
    this.gender = gender;
    
};


//функ-ое наследование
function Student(first, last, age, gender, group){
    Person.apply(this, arguments);
    this.group = group;

};

let newPerson = new Person("Иван", "Самоилович", 40, "male");
console.log(newPerson);

let newStudent = new Student("Евгения", "Зайцева", 21, "female", "011024");
console.log(newStudent);*/

let DOM = function(){
    //1)создание и возврат новых элементов по имени тега
    this.create = function(tagName) {
        return document.createElement(tagName);
    };
    //2) добавлениe атрибута к элементу или возврат значения атрибута
    this.attr = function(element, name, value){
        element.setAttribute(name, value);
    };
    //3) добавление любого содержимого внутрь элемента или его возврата
    this.html = function(element, value){
         element.innerHTML = value;
    };
    //4) поиск и возврат найденных элементов внутри переданного или в document по селектору CSS
    this.search = function(element, selector, number){
        if(!element ||!selector) return false;
        return (!number) ? element.querySelector(selector) : element.querySelectorAll(selector[number]);
    };
    //5)  добавление класса к элементу
    this.addClass = function(element, className){
       element.classList.add(className);
    };
    //6) удаление класса из элемента
    this.removeClass = function(element, className){
       element.classList.remove(className);
    };
    //7) переключение класса в элементе
    this.toggleClass = function(element, className){
        element.classList.toggle(className);
    }
    //8) добавление класса к элементу;
    this.addClass = function(element, className){
        element.classList.add(className);
    };
    //9) проверка существования класса в элементе (должен вернуть true или false)
    this.hasClass = function(element, className){
        return element.classList.contains(className);
    };
    
};

let Dom = new DOM();
let body = document.body;

//1
let h1 = Dom.create("h1");
console.log(h1);
let div = Dom.create("div");
console.log(div);
let span = Dom.create("span");
console.log(span);

//2
Dom.attr(h1, "class", "btn");
console.log(h1);

//3
let elem = Dom.html(h1, "Куплю слона недорого!");
console.log(elem);
let elemSpan = Dom.html(span, "змейка");
console.log(span);

//4
console.log(Dom.search(body, "span"));


// 5 и 8
Dom.addClass(span, "header");
Dom.addClass(span, "button");

//6
Dom.removeClass(span, "header");

//7
Dom.toggleClass(h1,"btn_2");

//9
console.log(Dom.hasClass(h1, "btn"));

