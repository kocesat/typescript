"use strict";
let emp = {
    id: 5,
    name: 'Esat',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let cm = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    console.log('Hola!!');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value;
function renderUnknown(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function processEvents() {
    while (true) {
    }
}
function reject(message) {
    throw new Error(message);
}
//# sourceMappingURL=index.js.map