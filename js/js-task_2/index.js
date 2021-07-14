let list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") { // при клике эл-ту устанавливается класс (зачеркивается)
       ev.target.classList.toggle('checked');//
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;// получаем родителя SPAN и удалем
       div.remove();
    }
}, false);

document.addEventListener( 'keyup', function(event) {
   if( event.code === 'Enter' ){
      newElement();
   };
 });

function newElement() {
    let li = document.createElement('li');// создание нового эл-та
    let inputValue = document.getElementById('toDoEl').value;// получаем значение поля input
    let t = document.createTextNode(inputValue);// создаем новый текстовый узел на основе значения input
    li.appendChild(t);// добавляем тегу li значение 

    if(inputValue == "") {
       alert("Введите дело -_-");
    } else {
       document.getElementById('list').appendChild(li);
    }

    document.getElementById('toDoEl').value = "";// очищаем поле

    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}
 