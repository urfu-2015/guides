class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    get salary(){
        return this.rate * this.days;
    }
}
// let worker = new Worker('name', 'surname', 9, 30 );
// console.log(worker.salary);


// Task2 and Task3

function Worker2(name, surname, rate, days) {

    let name2 = name;
    let surname2 = surname;
    let rate2 = rate;
    let days2 = days;

    this.getName= function(){
        return name2;
    }
    this.getSurname = function(){
        return surname2;
    }
    this.getRate = function(){
        return rate2;
    }
    this.setRate = function(value){
        rate2 = value;
    }
    this.getDays = function(){
        return days2;
    }
    this.setDays = function(value){
        days2 = value;
    }
    this.getSalary = function(){
        return rate2 * days2;
    }
}
// let worker2 = new Worker2('name', 'surname', 9, 30 );
// console.log(worker2.setRate(15));


// Task4
class MyString {
    constructor(){

        this.newStr = '';

    }

    reverse(str){
        for (let i = str.length - 1; i >= 0; i--){
            this.newStr += str[i]

        }
        return this.newStr;

    }
    ucFirst(str){
        this.newStr= str[0].toUpperCase() + str.slice(1)
        return this.newStr;

    }
    ucWord(str){

        for (let i = 0; i < str.length; i++){

            if ((str[i-1] == ' ' ) || (i == 0)){

                this.newStr += str[i].toUpperCase();
            }else{
                this.newStr += str[i];
            }
        }
        return this.newStr;
    }
}
// let str = new MyString();
// console.log(str.ucWord('str str str'))



// Task5
class User{
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    get fullName(){
        return `${this.name} ${this.surname}`
    }
}


class Student extends User{
    constructor(...arg){
        super(...arg)
    }
    get course() {
        let nowYear = new Date().getFullYear();

        if(nowYear == this.year){
            return 1
        }else if (((nowYear - this.year) > 6) || ((nowYear - this.year) < 0)){
            return 'incorrect value'
        }else{
            return nowYear - this.year
        }


    }

}
// let student = new Student('studName', 'studSern', '2018');
// console.log(student.fullName)

// Task6
let amount = 0;

function fun() {

    return ++amount

}
// console.log(fun())

// Task7
class parent{
    constructor(options){
        this.parentElement = options.parentElement;
        this.arrOfItems = options.arrOfItems;

        this.container = document.createElement('div');

        this.id = 1;
    }
    init(){
        this.container.classList.add('container');
        this.container.classList.add('d-flex');
        this.container.classList.add('justify-content-center');

        document.body.insertAdjacentElement("afterbegin", this.container);
        this.createCard()
    }

    createCard(){
        this.card = document.createElement('div');
        this.card.classList.add('col-md-6');
        this.card.classList.add('card');
        let header = document.createElement('div');
        header.innerHTML = '<div class="card-header d-flex justify-content-center align-items-center"><h2 class="card-title text-for-edit">list</h2> </div>'
        this.card.appendChild(header);
        let body = document.createElement('div');
        body.innerHTML = '<div class="card-body"> </div>';

        this.card.appendChild(body);

        this.list = document.createElement(this.parentElement);
        this.list.classList.add('to-do-list');

        this.container.appendChild(this.card);
        document.querySelector('.card-body').insertAdjacentElement("afterbegin", this.list);

        for (let i = 0; i < this.arrOfItems.length; i++){
            this.buildLI(this.arrOfItems[i])
        }

    }
    buildLI(inputContent) {
        this.list = document.querySelector('.to-do-list');
        this.newLi = document.createElement('li');
        this.newLi.classList.add('list-item');
        this.newLi.id = this.id;
        this.newLi.innerHTML = ` <span class="content"> ${inputContent} </span>`;
        this.list.appendChild(this.newLi);

        this.id++;
    }
}


class DOMINIT extends  parent{
    constructor(options){
        super(options);

        this.ctrl = options.ctrl;
        this.shift = options.shift;
        this.onCreate = options.onCreate;
        this.onDelete = options.onDelete;
    }
    initChild(){
        this.init();

        this.addNewTask();
        this.removeItem();
    }

    addNewTask(){
        let footer = document.createElement('div');
        footer.classList.add('card-footer')
        footer.innerHTML = '<div class="block-extend-item-list d-flex justify-content-between align-items-center"><input class="new-items" placeholder="here can be your addition"><span class="add-new-item"><i class="fas fa-plus"></i></span>  <span class="remove-item d-none"><i class="fas fa-minus"></i></span></div>'
        this.card.appendChild(footer);

        this.parentBlock = document.querySelector('.block-extend-item-list');
        this.addBtn = this.parentBlock.querySelector('.add-new-item');
        this.addBtn.addEventListener('click', () => {
            this.inputContent = this.parentBlock.querySelector('input').value;
            this.parentBlock.querySelector('input').value = '';

            this.buildLI(this.inputContent);
            this.onCreate()
        })
    }

    buildLI(inputContent){

        super.buildLI(inputContent);

        this.clickAm = 0;

        this.newLi.addEventListener('click', (e) => {

            let targetLi = e.target.closest('li'),
                removeItemBtn = document.querySelector('.remove-item'),
                allLi = this.list.children;

            if (!(this.ctrl) || ((this.ctrl) && (!event.ctrlKey))){
                for(let i = 0; i < allLi.length; i++){
                    allLi[i].classList.remove('active')
                }
            }
            targetLi.classList.toggle('active');

            if ((this.shift) && (event.shiftKey)){

                if (!(this.clickAm%2)) {
                    this.firstPicked = targetLi.id
                }else{
                    this.secondPicked = targetLi.id;

                    if(this.firstPicked > this.secondPicked){

                        for(let i = this.secondPicked; i <= this.firstPicked; i++) {
                            let element = document.getElementById(i);
                            if (element){
                                element.classList.add('active')
                            }
                        }
                    }else {

                        for(let i = this.firstPicked; i <= this.secondPicked; i++) {
                            let element = document.getElementById(i);
                            if (element){
                                element.classList.add('active')
                            }
                        }
                    }
                }
                this.clickAm++;
            }
            let containAct = [].slice.call(allLi).some( (li) => li.classList.contains('active'));

            if (containAct){
                removeItemBtn.classList.remove('d-none');
            }else{
                removeItemBtn.classList.add('d-none');
            }
        })

   }

    removeItem(){
        let removeItemBtn = document.querySelector('.remove-item');
        removeItemBtn.addEventListener('click', () => {
            let li = document.querySelectorAll('li.active'),
                conf = confirm('Are you sure?');

            if (conf){
                for (let i = 0; i < li.length; i++){
                    li[i].remove();
                }
                removeItemBtn.classList.add('d-none')
            }
            this.onDelete();
        });
    }
}

const options = {
        ctrl: false, // если true - позволить выбор нескольких элементов списка с нажатой кнопкой ctrl
        shift: true ,
        parentElement: 'ul',     // родительский элемент списка ul, ol, div - чего душа желает
        itemElement: 'li',          // элемент списка li, div ....
        arrOfItems: ['1', '2', '3', '4', '5'],    // массив элементов которые будут изначально добавлены в список
        onCreate: onCreate,    // функция, которая будет выполнена при событии создания элемента списка
        onDelete: onDelete,      // функция, которая будет выполнена при событии удаления элемента списка
    }


function onCreate(){
    alert('new item created')

}
function onDelete(){
    alert('items removed')
}

let initialParent = new parent(options);
console.log(initialParent.init());

let initialList = new DOMINIT(options);
console.log(initialList.initChild());



