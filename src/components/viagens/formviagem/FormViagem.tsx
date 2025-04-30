import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Viagem } from "../../../models/Viagem";
import { Veiculo } from "../../../models/Veiculo";
import { buscar, cadastrar, atualizar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import BotaoCadastrarVeiculoViagem from "../../../components/buttons/BotaoCadastrarVeiculoViagem";

function FormViagem() {
  const navigate = useNavigate();
  const [viagem, setViagem] = useState<Viagem>({

  } as Viagem);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/viagens/${id}`, setViagem, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar viagem.", "erro");
      }
    }
  }

  async function buscarVeiculos() {
    try {
      await buscar("/veiculos/all", setVeiculos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao carregar veículos", "erro");
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    } else {
      buscarVeiculos();
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setViagem({
      ...viagem,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/viagens/${id}`, viagem, setViagem, {
          headers: { Authorization: token },
        });
        ToastAlerta("Viagem atualizada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar viagem.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/viagens/cadastrar`, viagem, setViagem, {
          headers: { Authorization: token },
        });
        ToastAlerta("Viagem cadastrada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar viagem.", "erro");
        }
      }
    }

    navigate("/viagens/all");
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-gray-50 border-gray-300 border  rounded-lg p-8">
          <h1 className="text-2xl text-center my-4">
            {id === undefined ? "Cadastrar Viagem" : "Editar Viagem"}
          </h1>

          <form
            id="formViagem"
            className="flex flex-col gap-6"
            onSubmit={gerarNovaViagem}
          >
            <div className="flex flex-col">
              <label htmlFor="origem" className="text-gray-500 text-sm mb-1">
                Origem
              </label>
              <input
                type="text"
                placeholder="Origem"
                name="origem"
                className="border-b border-gray-300 py-2 focus:outline-none"
                value={viagem.origem || ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="destino" className="text-gray-500 text-sm mb-1">
                Destino
              </label>
              <input
                type="text"
                placeholder="Destino"
                name="destino"
                className="border-b border-gray-300 py-2 focus:outline-none"
                value={viagem.destino || ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="vagas" className="text-gray-500 text-sm mb-1">
                Quantidade de vagas
              </label>
              <input
                type="number"
                placeholder="Quantidade de vagas"
                name="vagas"
                className="border-b border-gray-300 py-2 focus:outline-none"
                value={viagem.vagas || ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="distancia" className="text-gray-500 text-sm mb-1">
                Distância (km)
              </label>
              <input
                type="number"
                placeholder="Distância em km"
                name="distancia"
                className="border-b border-gray-300 py-2 focus:outline-none"
                value={viagem.distancia || ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="veiculo" className="text-gray-500 text-sm mb-1">
                Veículo que fará a viagem
              </label>
              <select
                name="veiculo"
                className="w-full border-b border-gray-300 py-2 focus:outline-none bg-white"
                onChange={(e) => {
                  const idSelecionado = parseInt(e.target.value);
                  const veiculoSelecionado = veiculos.find((v) => v.id === idSelecionado);
                  setViagem({ ...viagem, veiculo: veiculoSelecionado! });
                }}
                value={viagem.veiculo?.id || ""}
              >
                <option value="" disabled>
                  Selecione um veículo
                </option>
                {veiculos.map((veiculo) => (
                  <option key={veiculo.id} value={veiculo.id}>
                    {veiculo.modelo} - {veiculo.placa}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <BotaoCadastrarVeiculoViagem />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormViagem;

