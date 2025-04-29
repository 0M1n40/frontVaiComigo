
// import { Link } from 'react-router-dom'
// // import { Veiculo } from '../../../models/Veiculo'
// import { Viagem } from '../../../models/Viagem';


// interface CardViagemProps {
//     viagem?: Viagem;
// }

// function CardViagem({ viagem }: CardViagemProps) {
//     return (
//         <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
//             <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
//                 Veículo
//             </header>
//             <p className='p-8 text-3xl bg-slate-200 h-full'>{viagem ? viagem.destino : 'Modelo não disponível'}</p>
            
//             <div className="flex">
//                 <Link to=''
//                     className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
//                         flex items-center justify-center py-2'>
//                     <button>Editar</button>
//                 </Link>

//                 <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
//                     flex items-center justify-center'>
//                     <button>Deletar</button>
//                 </Link>
//             </div>

//         </div>
//     )
// }

// export default CardViagem

import { Link } from 'react-router-dom'
import { Viagem } from '../../../models/Viagem';

interface CardViagemProps {
  viagem?: Viagem;
}

function CardViagem({ viagem }: CardViagemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800">Peça uma viagem</h2>

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

     
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-fit">
        <span className="mr-2">👤</span>
        <span className="text-gray-700">
          {viagem?.vagas || 'Vagas disponiveis no veiculo'}
        </span>
        <span className="ml-2">▾</span>
      </div>

      <div className="flex gap-2">
        <Link to={`/viagens/${viagem?.id}`} className="w-full">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold w-full py-3 rounded-lg">
            Editar
          </button>
        </Link>

        <Link to={`/viagens/${viagem?.id}`} className="w-full">
          <button className="bg-gray-100 hover:bg-red-700 text-white font-semibold w-full py-3 rounded-lg">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardViagem;
