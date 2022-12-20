class Account {
  nickname?: string; // optional
  
  constructor(public readonly id: number, public owner: string, private _balance: number) {
  }
  
  public get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('Invalid amount');
      // Record a transaction
    this._balance += amount;
    this.calculateTax();
  }

  private calculateTax() {
  }
}

let account = new Account(1, 'mosh', 0);
account.deposit(100);
account.balance;
// console.log(account instanceof Account);


class SeatAssignment {
  // A1, A2, ...
  // Mosh, Joh, ...
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
// seats['A1'] = 'east';
seats.A2 = 'John';


// static fields
class Ride {
  private static _activeRides: number = 0;

  static get activeRides() {
    return Ride._activeRides;
  }

  start() {Ride._activeRides++};
  stop() {Ride._activeRides--};

}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// console.log(Ride.activeRides);


// Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  protected walk() {
    console.log('walking');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log('Taking test...');
  }
}

let student = new Student(1, 'John', 'john@gmail.com');

class Teacher extends Person {

  override get fullName() {
    return 'Professor ' + super.fullName;
  }

}

let teacher = new Teacher('john', 'smith');
// console.log(teacher.fullName);


// Polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, 'John', 'Smith'),
  new Teacher('Mosh', 'Hamedani')
])


// Abstract classes
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering circle...');
  }
}


// Interfaces
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class MyCalendar implements ICalendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log('My calendar added event');
  }

  removeEvent(): void {
    console.log('My calendar removed event');
  }
}


// Generic classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>('a', 'b');











