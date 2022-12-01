const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor'; -> Não pode alterar o valor de chave por causa do readonly
objetoA.chaveB = 'alterando chave';
objetoA.chaveD = 'nova chave';

console.log(objetoA);
