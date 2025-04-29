
import { Link } from 'react-router-dom'
import { Veiculo } from '../../../models/Veiculo'


interface CardVeiculoProps{
    veiculo: Veiculo;
}

function CardVeiculo({ veiculo }: CardVeiculoProps) {
    return (
        <div className="border border-[#DADADA] rounded-lg bg-white flex flex-col overflow-hidden w-full max-w-sm">
            <div className="flex flex-col gap-2 items-center justify-center py-8 px-4 text-center">
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
                <Link to={`/veiculos/editar/${veiculo.id}`} className="flex-1">
                    <button className="w-full h-full bg-[#F5F5F5] text-black text-sm font-medium">
                        Editar
                    </button>
                </Link>
                <Link to={`/veiculos/deletar/${veiculo.id}`} className="flex-1">
                    <button className="w-full h-full bg-[#FF4D4F] text-white text-sm font-medium">
                        Deletar
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default CardVeiculo

