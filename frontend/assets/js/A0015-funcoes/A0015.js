"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapString = void 0;
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
exports.mapString = mapString;
const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
//# sourceMappingURL=A0015.js.map