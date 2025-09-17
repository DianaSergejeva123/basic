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

