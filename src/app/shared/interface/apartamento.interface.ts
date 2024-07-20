export interface Apartamento {
  id: number;
  bloco: number;
  apartamento: number;
  morador: string;
  telefone: string;
  email: string;
  veiculos: Veiculos[]
}

interface Veiculos {
  id: number;
  marca: string;
  modelo: string;
  cor: string;
  placa: string;

}
