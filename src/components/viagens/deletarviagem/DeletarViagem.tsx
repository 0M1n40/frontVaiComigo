import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Viagem } from "../../../models/Viagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"

function DeletarViagem() {

    const navigate = useNavigate()

    const [viagem, setViagem] = useState<Viagem>({} as Viagem)
    const [isLoading, setIsLoading] = useState<boolean>(false) //ainda não sei se esse isLoading vai ser util aqui.
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }
    // Tirei o alert para melhor visualização
    // useEffect(() => {
    //     if (token === '') {
    //         //alert('Você precisa estar logado')
    //         navigate('/')
    //     }
    // }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Viagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar a viagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar viagem</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o viagem a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-3 px-6 text-center text-gray-800 font-bold text-2xl'>
                    Viagem
                </header>
                <div className="p-6 text-xl font-medium text-gray-800 mb-2">
                <p>Origem: {viagem.origem}</p>
                <p>Destino: {viagem.destino}</p>
                <p>Vagas: {viagem.vagas}</p>
                <p>Distancia: {viagem.distancia}</p>
                </div>
                <div className="flex p-4 gap-4 bg-gray-50 border-t">
                        <button 
                            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200'
                            onClick={retornar}>
                            Cancelar
                        </button>
                        <button 
                            className='w-full text-slate-100 bg-[#4EBCB9] hover:bg-[#3EA7A5]  flex items-center justify-center rounded-lg font-medium transition-colors duration-200'
                            onClick={deletarViagem}>
                            <span>Confirmar</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}
export default DeletarViagem