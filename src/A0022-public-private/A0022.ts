export class Empresa {
  public readonly name: string; //public n necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

const empresa1 = new Empresa('Isa Fotos', '21.112.123/0001-02');
const colaborador1 = new Colaborador('Isabela', 'Sotto');
const colaborador2 = new Colaborador('Gabriel', 'Sotto');
const colaborador3 = new Colaborador('Alirio', 'Sotto');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();
