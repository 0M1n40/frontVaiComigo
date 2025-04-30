import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Viagem } from "../../../models/Viagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"

function DeletarViagem() {
  const navigate = useNavigate()
  const [viagem, setViagem] = useState<Viagem>({} as Viagem)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/viagens/${id}`, setViagem, {
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

  async function deletarViagem() {
    setIsLoading(true)
    try {
      await deletar(`/viagens/${id}`, {
        headers: { Authorization: token },
      })
      alert("Viagem apagada com sucesso")
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      } else {
        alert("Erro ao deletar a viagem.")
      }
    }
    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/viagens/all")
  }

  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0D334D] mb-1">Deletar Viagem</h1>
          <p className="text-gray-700 text-sm">
            Tem certeza que deseja apagar a viagem abaixo?
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-inner text-base text-gray-800 space-y-1">
          <p><strong>Origem:</strong> {viagem.origem}</p>
          <p><strong>Destino:</strong> {viagem.destino}</p>
          <p><strong>Vagas:</strong> {viagem.vagas}</p>
          <p><strong>Distância:</strong> {viagem.distancia} km</p>
        </div>

        <div className="flex gap-3 pt-3">
          <button
            onClick={retornar}
            className="w-full py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition"
          >
            Cancelar
          </button>

          <button
            onClick={deletarViagem}
            disabled={isLoading}
            className="w-full py-2 rounded-lg bg-[#0D334D] hover:bg-blue-900  text-white font-medium transition"
          >
            {isLoading ? "Deletando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarViagem
