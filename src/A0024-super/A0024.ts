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
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    return super.getNomeCompleto();
  }
}

export class Cliente extends Pessoa { }

const aluno = new Aluno('Nome Aluno', 'Sobrenome Aluno', 14, '000-000-000-xx', '001');
const pessoa = new Pessoa('Nome Pessoa', 'Sobrenome Pessoa', 24, '000-xxx-000-xx');

console.log(aluno.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
console.log(aluno);
