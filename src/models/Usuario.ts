import { Veiculo } from "./Veiculo";

export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto?: string;
  veiculo?: Veiculo[];
}