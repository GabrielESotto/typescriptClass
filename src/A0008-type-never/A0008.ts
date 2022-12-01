function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// Never normalmente é usado para travar sua aplicação ou jogar um erro.
