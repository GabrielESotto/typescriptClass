// Tipos basicos
// let nome: string = 'Luiz';
// let idade: number = 30;

// Arrays
const arrayNumbers: Array<number> = [1, 2, 3];
const arrayNumbers2: number[] = [1, 2, 3];
const arrayStrings: Array<string> = ['a', 'b', 'c'];

// Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Gabriel',
  idade: 24,
};

// Funções
function sum(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
