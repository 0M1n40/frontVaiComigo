import { Link } from "react-router-dom";
import { useState } from "react";
import VaiComigo from "../../utils/img/VaiComigo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0D334D] shadow-md text-white ">
      <div className="flex justify-between items-center px-6 py-4  mx-auto">
        
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img src={VaiComigo} alt="Logo VaiComigo" className="h-14 w-auto " />
        </Link>

        {/* Botão do menu (visível só no mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-8 text-[#a2aeb6] font-light">
          <Link to="" className="hover:underline">Viagens</Link>
          <Link to="/veiculo" className="hover:underline">Veículos</Link>
          <Link to="" className="hover:underline">Cadastrar</Link>
          <Link to="" className="hover:underline border border-white px-3 py-1 rounded-md">Sair</Link>
        </div>
      </div>

      {/* Links Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-[#a2aeb6] font-light">
          <Link to="" className="hover:underline" onClick={() => setMenuOpen(false)}>Viagens</Link>
          <Link to="/veiculo" className="hover:underline" onClick={() => setMenuOpen(false)}>Veículos</Link>
          <Link to="" className="hover:underline" onClick={() => setMenuOpen(false)}>Cadastrar</Link>
          <Link to="" className="hover:underline border border-white px-3 py-1 rounded-md text-center" onClick={() => setMenuOpen(false)}>Sair</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
