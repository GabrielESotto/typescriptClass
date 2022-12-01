let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  name: 'Luiz' as const, // Nao pode ser alterado para nada alem de Luiz
  lastName: 'Miranda',
};

function pickColor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(pickColor('Vermelho'));

// Module mode
export default 1;
