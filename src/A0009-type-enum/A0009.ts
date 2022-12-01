// Enumerate

enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
  ROXO = 'ROXO',
  VERDE = 201, // Tem que ter um initializer
  ROSA, // 202
}

function chooseColor(cor: Cores): void {
  console.log(Cores[cor]);
}

chooseColor(Cores.AZUL);
