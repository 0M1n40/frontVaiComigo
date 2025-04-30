
import { Link } from 'react-router-dom'
import { Viagem } from '../../../models/Viagem';



interface CardViagemProps {
  viagem?: Viagem;
  
}

function CardViagem({ viagem }: CardViagemProps) {
  
  return (

    
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-md mx-auto mt-20">
      <h2 className="text-xl font-bold text-gray-800">Minha Viagem {viagem?.id}</h2>

      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
        <span className="text-black mr-3">⬤</span>
        <span className="text-gray-700">
          {viagem?.origem || 'Local de partida'}
        </span>
      </div>

      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 justify-between">
        <div className="flex items-center">
          <span className="text-black mr-3">◼</span>
          <span className="text-gray-700">
            {viagem?.destino || 'Local de destino'}
          </span>
        </div>
        <span className="text-black text-xl">＋</span>
      </div>


      {viagem?.veiculo && (
  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
    <span className="mr-2">🚗</span>
    <span className="text-gray-700">
      {viagem.veiculo.modelo || 'Modelo não especificado'}
    </span>
  </div>
)}

     
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-fit">
        <span className="mr-2">👤 Vagas:</span>
        <span className="text-gray-700">
          {viagem?.vagas || 'Vagas disponiveis no veiculo'}
        </span>
        <span className="ml-2">▾</span>
      </div>


      

      <div className="flex gap-2">
        <Link to={`/viagem/${viagem?.id}`} className="w-full">
          <button className="bg-[#0D334D] hover:bg-blue-900 text-white font-semibold w-full py-3 rounded-lg">
            Editar
          </button>
        </Link>

        <Link to={`/deletarviagem/${viagem?.id}`} className="w-full">
          <button className="bg-[#4EBCB9] hover:bg-teal-800 text-white font-semibold w-full py-3 rounded-lg">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardViagem
