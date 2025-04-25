import { Link } from "react-router-dom";
import vaicomigo2 from "../../utils/img/vaicomigo2.png";
function Navbar() {
  return (
    <>
      <div>
        <div className="w-full  flex justify-center md-flex pt-4 bg-[#0D334D] text-white px-10 h-18 ">
          <div className="flex justify-left w-1/2 h-1/1">
          <Link to="/home">
            <img
              src={vaicomigo2}
              alt="Imagem Página Home"
              className="w-20 h-10 object-contain "
            />
            </Link>
          </div>

          <div className="container flex justify-between text-gray-300 text-lg"></div>

          <div className="flex gap-20 space-x-6 font-popping-light text-[#a2aeb6] pt-1">
            <Link to="" className="">
              Viagens
            </Link>
            <Link to="" className="">
              Veículos
            </Link>
            <Link to="" className="">
              Cadastrar
            </Link>

            <Link to="" className="">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
