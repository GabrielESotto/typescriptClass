const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string?] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, ...string[]] = [2, 'Gabriel', '...'];

dadosCliente1[0] = 1000;
// dadosCliente1[1] = 100; Não pode alterar para um number pq o tipo é string

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// dadosCliente1.push('Junior'); Sem o readonly, voce pode usar funcoes de array
// para adicionar/remover as tuplas.
// Com o readonly nos tornamos a tupla imutaveis que é o mais comum em tuplas
