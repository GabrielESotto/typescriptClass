export class Empresa {
  public readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const c of this.colaboradores) {
      console.log(c);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastName: string) { }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Isabela', 'Sotto');
const colaborador2 = new Colaborador('Gabriel', 'Sotto');
const colaborador3 = new Colaborador('Alirio', 'Sotto');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.popColaborador();

empresa1.mostrarColaboradores();
