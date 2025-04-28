import { Usuario } from "./Usuario";
import { Viagem } from "./Viagem";

export interface Veiculo {
  id: number|null;
  modelo: string;
  placa: string;
  tipoVeiculo: string;
  viagens?: Viagem[];
  usuario?: Usuario;
}