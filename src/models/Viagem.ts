import { Veiculo } from "./Veiculo";

export interface Viagem {
  id: number;
  origem: string;
  destino: string;
  vagas: number;
  distancia: number;
  veiculo?: Veiculo;
}