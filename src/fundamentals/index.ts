let sales: number = 123_456_789; // if you initialize the variable, do not need to declare its type
let course: string = 'Typscript';
let is_published: boolean = true;
let level; // if you do not initialize, it will automatically be of type 'any'

function render(document: any) {
    console.log(document);
}

// Arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.toPrecision(21));

// Tuples
// 1, 'Mosh'
let user: [number, string] = [1, 'Mosh'];
// user.push(1); // gaps of typescript. tsc does not understand

// Enums
// naming convention PascalCase
const enum Size { Small = 's', Medium = 'm', Large = 'l' };
let mySize = Size.Large;
// console.log(mySize);

// Functions

function calculateTax(income: number, tax: number = 2022): number {
    if (income < 50_000)
			return income * tax;
		return income * 1.3;
}

calculateTax(10_000, 22);

// Objects
let employee: {
	readonly id: number,
	name: string,
	retire: (date: Date) => void
} = { 
	id: 1, 
	name: 'Mosh',
	retire: (date: Date) => {
		console.log(date);
	}
};