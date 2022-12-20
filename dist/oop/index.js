"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
        this.calculateTax();
    }
    calculateTax() {
    }
}
let account = new Account(1, 'mosh', 0);
account.deposit(100);
account.balance;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'John';
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    ;
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('Taking test...');
    }
}
let student = new Student(1, 'John', 'john@gmail.com');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('john', 'smith');
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani')
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering circle...');
    }
}
class MyCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log('My calendar added event');
    }
    removeEvent() {
        console.log('My calendar removed event');
    }
}
//# sourceMappingURL=index.js.map