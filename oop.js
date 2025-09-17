//ОПП - парадигма программирования
//которая использует "объекты" для представления
//данных и методов для работы с этими данными.

//1. Класс и Объект (Classes & Object)
//класс - "чертёж" для создания объектов
//объект - экземпляр класса с собственными данными
// object - instance of class

class Animal {
    //конструктор - специальный метод
    //для создания и инициализации объекта
    //spesial method for creating and
    //initializing an object created with a class

    constructor(name, age) {
        //this - ссылка на текущий объект
        //reference to the current object
        this.name = name;
        this.age = age;
    }
    //метод - это функция внутри объекта
    //method - a function inside an object
    speak() {
        console.log(`${this.name} издаёт какой-то звук.`);
    }
    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

//создание объектов (экземпляров класса)
//creating objects (instaces of a class)
const genericAnimal = new Animal(`Some animal`, 5);
const myDog = new Animal ("Шарик", 8);

genericAnimal.displayInfo();
myDog.displayInfo();
myDog.speak();

//2. Инкапсуляция (Encapsulation)
//инкапсуляция - скрытие внутренней реализации
//encapsulation - hiding internal implementation
//или же - объединение данных и методов
//и работы с этими данными в одном классе

console.log(`----Инкапсуляция----`);

class BankAccount {
    //# - означает, что свойство приватное
    //private property

    #balance =0; //приватное свойство (скрытое)
    //private property
    constructor(initialBalance) {
        if(initialBalance > 0) {
            this.#balance = initialBalance;
        }
    }
    //публичный метод для внесения денег
    //publicmethod for depositing money
    deposit(amount) {if(amount > 0){
        this.#balance += amount;
        console.log(`Внесено: ${amount}. Новый баланс: ${this.#balance}`);
    }
}
//публичный метод для снятия денег
//public method for withdrawing money
withdraw(amount) {
    if(amount > && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Снято: ${amount}. Новый баланс: ${this.#balance}`);
    } else {
        console.log(`Недостаточно средств или неверная сумма.`);
    }
}
}