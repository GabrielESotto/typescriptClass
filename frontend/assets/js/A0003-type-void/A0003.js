"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
exports.pessoa = pessoa;
pessoa.exibirNome();
//# sourceMappingURL=A0003.js.map