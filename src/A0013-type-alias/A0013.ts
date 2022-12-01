type Idade = number;
type Pessoa = {
  name: string;
  age: Idade;
  salary: number;
  favoriteColor?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = CorRGB | CorCMYK;

const person: Pessoa = {
  name: 'Gabriel',
  age: 24,
  salary: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: FavoriteColor): Pessoa {
  return { ...pessoa, favoriteColor: cor };
}

console.log(setCorPreferida(person, 'Verde'));
