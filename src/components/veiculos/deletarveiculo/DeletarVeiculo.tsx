import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Veiculo } from "../../../models/Veiculo"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"


function DeletarVeiculo() {

    const navigate = useNavigate()

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false) //ainda não sei se esse isLoading vai ser util aqui.
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
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

    async function deletarVeiculo() {
        setIsLoading(true)

        try {
            await deletar(`/veiculos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Veículo apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o veículo.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/veiculos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar veículo</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o veículo a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-3 px-6 text-center text-gray-800 font-bold text-2xl'>
                    Veículo
                </header>
                <div className="p-6 text-xl font-medium text-gray-800 mb-2">
                <p>Modelo: {veiculo.modelo}</p>
                <p>Placa: {veiculo.placa}</p>
                <p>Tipo: {veiculo.tipoVeiculo}</p>
                </div>
                <div className="flex p-4 gap-4 bg-gray-50 border-t">
                        <button 
                            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200'
                            onClick={retornar}>
                            Cancelar
                        </button>
                        <button 
                            className='w-full text-slate-100 bg-[#4EBCB9] hover:bg-[#3EA7A5]  flex items-center justify-center rounded-lg font-medium transition-colors duration-200'
                            onClick={deletarVeiculo}>
                            <span>Confirmar</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}
export default DeletarVeiculo