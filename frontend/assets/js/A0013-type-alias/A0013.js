"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const person = {
    name: 'Gabriel',
    age: 24,
    salary: 200000,
};
function setCorPreferida(pessoa, cor) {
    return Object.assign(Object.assign({}, pessoa), { favoriteColor: cor });
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(person, 'Verde'));
//# sourceMappingURL=A0013.js.map