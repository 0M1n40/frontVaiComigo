import { Link } from "react-router-dom";
import VaiComigo from "../../utils/img/VaiComigo.png"; // Ajuste o caminho da imagem conforme necessário

function Navbar() {
  return (
    <div className="w-full justify-center py-2 bg-[#0D334D] shadow-192 px-10 text-white mb-0.5">
      <div className="container flex justify-between items-center text-gray-300 text-lg">
        
        {/* Esquerda - Pode adicionar um logo ou deixar vazio */}
        <div className="flex ">
            <Link to="/home" className="w-111 h-1/2">
            <img src={VaiComigo} 
            alt="Logo VaiComigo" 
            className="w-1/3 h-1/2" />
            </Link>
        </div>

        {/* Direita - Links de navegação */}
        <div className="flex gap-8 font-popping-light text-[#a2aeb6] ml-89 ">
          <Link to=""  className="hover:underline">Viagens</Link>
          <Link to="/veiculos" className="hover:underline">Veículos</Link>
          <Link to=""  className="hover:underline">Cadastrar</Link>
          <Link to=""  className="hover:underline border-1 w-15 text-center rounded-md ">Sair</Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
