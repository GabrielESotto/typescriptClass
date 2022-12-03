"use strict";
let x;
if (typeof x === 'undefined')
    x = 20;
console.log(x * 2);
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
const raiz = squareOf(2);
const raiz2 = squareOf('2');
if (raiz === null)
    console.log('conta invalida');
console.log(raiz);
//# sourceMappingURL=A0007.js.map