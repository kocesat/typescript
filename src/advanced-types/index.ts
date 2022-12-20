type Employee = {
  readonly id: number, 
  name: string,
  retire: (date: Date) => void
}

let emp: Employee = {
  id: 5,
  name: 'Esat',
  retire: (date: Date) => {
    console.log(date);
  }
}

// Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs('10kg');

// Intersection of Types
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag : () => {},
  resize: () => {},
}

// Literals
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inc';
let cm: Metric = 'cm';

// Nulls
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  }
  console.log('Hola!!');
}
// greet(null);
// greet(undefined);


// Optional Chaining
type Customer = {
  birthday?: Date,
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date()};
}
let customer = getCustomer(0);
// console.log(customer?.birthday?.getFullYear()); // Optional property access operator.

// Optional element access operator
// customers?.[0];

// Optional call
let log: any = null;
log?.('a'); // returns undefined


// Null Coalescense
let speed: number | null = null;
// Falsy values in js: undefined, null, '', false, 0
let ride = {
  // Nullish (if null or undefined) coalescing operator
  speed: speed ?? 30
}


// Type Assertions (not type-casting). Its more like telling the compiler : we know more about type than you
let phone = document.getElementById('phone') as HTMLInputElement;
phone.value;
// or you can use <HTMLInputElement>
// let phone = <HTMLInputElement> document.getElementById('phone');


// The unknown type
function renderUnknown(document: unknown) {
  // Narrowing
  if (typeof document === 'string') {
    document.toUpperCase();
  }

  // if (document instanceof Customer) {
  // }
}


// The never type
function processEvents(): never {
  while (true) {
    // Read a message from a queueu
  }
}

function reject(message: string): never {
  throw new Error(message);
}

// reject('input');

// processEvents();
// console.log('never reach here');




