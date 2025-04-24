import { Usuario } from "./Usuario";
import { Viagem } from "./Viagem";

export interface Veiculo {
  id: number;
  modelo: string;
  placa: string;
  tipoVeiculo: string;
  viagens?: Viagem[];
  usuario?: Usuario;
}