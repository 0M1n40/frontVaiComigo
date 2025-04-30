
import { Link } from 'react-router-dom'
import { Veiculo } from '../../../models/Veiculo'


interface CardVeiculoProps{
    veiculo: Veiculo;
}

function CardVeiculo({ veiculo }: CardVeiculoProps) {

    

    return (
        
        <div className="border border-[#DADADA] rounded-lg bg-white flex flex-col overflow-hidden w-full max-w-sm shadow-lg mt-20">
            <div className="flex flex-col gap-3 items-center justify-center py-8 px-4 text-center">
                <span className="text-2xl font-semibold text-black">
                    {veiculo.modelo}

                </span>
                <span className="text-sm text-zinc-500">

                    Placa: {veiculo.placa}
                </span>
                <span className="text-sm text-zinc-500">
                    Tipo: {veiculo.tipoVeiculo}
                </span>
            </div>


            <div className="flex w-full h-12">
                <Link to={`/veiculos/${veiculo.id}`} className="flex-1">
                    <button className="w-full h-full bg-[#0D334D] hover:bg-blue-900 text-white text-sm font-medium">
                        Editar
                    </button>
                </Link>
                <Link to={`/deletarveiculo/${veiculo.id}`} className="flex-1">
                    <button className="w-full h-full bg-[#4EBCB9] hover:bg-teal-800 text-white text-sm font-medium">
                        Deletar
                    </button>
                </Link>


                
            </div>
        </div>
    );
}


export default CardVeiculo

