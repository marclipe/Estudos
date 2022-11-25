//Extends, Implements

interface Veiculo {
  rodas: number;
  acelerar: () => void;
  frear?: () => void;
}

class CriarVeiculo implements Veiculo {
  rodas: number;

  constructor(rodas: number) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('qualquer coisa');
  }
}

// interface Moto extends Veiculo {
//   capacete: boolean;
//   empinar: () => void;
// }

// let bross: Moto;

// bross.empinar;
