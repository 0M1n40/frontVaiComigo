import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Veiculo } from "../../../models/Veiculo"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"

function DeletarVeiculo() {
  const navigate = useNavigate()
  const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/veiculos/${id}`, setVeiculo, {
        headers: { Authorization: token },
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarPorId(id)
  }, [id])

  async function deletarVeiculo() {
    setIsLoading(true)
    try {
      await deletar(`/veiculos/${id}`, {
        headers: { Authorization: token },
      })
      alert("Veículo apagado com sucesso")
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      } else {
        alert("Erro ao deletar o veículo.")
      }
    }
    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/veiculos/all")
  }

  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className=" rounded-2xl shadow-xl/10 w-full max-w-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-950 mb-2">Deletar Veículo</h1>
          <p className="text-gray-700">
            Tem certeza que deseja apagar o veículo abaixo?
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-inner">
          <p className="text-lg text-gray-800 mb-2">
            <strong>Modelo:</strong> {veiculo.modelo}
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Placa:</strong> {veiculo.placa}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Tipo:</strong> {veiculo.tipoVeiculo}
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={retornar}
            className="w-full py-3 rounded-xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold transition"
          >
            Cancelar
          </button>

          <button
            onClick={deletarVeiculo}
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-[#0D334D] hover:bg-blue-900 text-white font-semibold transition"
          >
            {isLoading ? "Deletando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarVeiculo
