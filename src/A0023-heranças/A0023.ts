export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) { }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'O nome completo do aluno é: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa { }

const aluno = new Aluno('Nome Aluno', 'Sobrenome Aluno', 14, '000-000-000-xx');
const pessoa = new Pessoa('Nome Pessoa', 'Sobrenome Pessoa', 24, '000-xxx-000-xx');

console.log(aluno.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
