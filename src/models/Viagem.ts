import { Veiculo } from "./Veiculo";

export interface Viagem {
  modelo: string;
  id: number;
  origem: string;
  destino: string;
  vagas: number;
  distancia: number;
  veiculo?: Veiculo;
}