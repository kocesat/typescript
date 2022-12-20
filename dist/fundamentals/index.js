"use strict";
let sales = 123456789;
let course = 'Typscript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => n.toPrecision(21));
let user = [1, 'Mosh'];
;
let mySize = "l";
function calculateTax(income, tax = 2022) {
    if (income < 50000)
        return income * tax;
    return income * 1.3;
}
calculateTax(10000, 22);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map