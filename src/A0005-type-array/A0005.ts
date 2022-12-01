// Array<T> - T[]

function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicaArgs(1, 2, 3, 3);
console.log(result);

function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor, '');
}

console.log(concatStrings('Ga', 'briel', ' ', 'Sotto'));

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('ga', 'br', 'iel');
console.log(upper);
