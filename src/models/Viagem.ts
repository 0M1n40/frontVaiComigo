import { Veiculo } from "./Veiculo";

export interface Viagem {
  
  id: number|null;
  origem: string;
  destino: string;
  vagas: number;
  distancia: number;
  veiculo?: Veiculo;
  
}