import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usuario } from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import "./Cadastro.css";
import BotaoPrincipal from "../../components/buttons/BotaoCadastrarEntrar";
import logoPequena from "../../utils/img/logoPequena.png";
import BotaoLogin from "../../components/buttons/BotaoLogin";
import { Oval } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [usuario, setUsuario] = useState<Usuario>({
    id: null,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== null && usuario.id !== 0) {
      navigate("/login");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, () => {});
        alert("Usuário cadastrado com sucesso!");
        ToastAlerta("Usuario Cadastrado com sucesso", 'sucesso');
        
        navigate("/login");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
        
      } 
    } else {
      alert("Senha deve ter pelo menos 8 caracteres.");
      setUsuario({ ...usuario, senha: "" });
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Oval
          visible={true}
          height={120}
          width={120}
          color="#60A5FA"
          secondaryColor="#BFDBFE"
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen">
      {/* Lado esquerdo com fundo azul e logo */}
      <div className="relative bg-[#0D334D] h-full hidden lg:flex flex-col justify-between p-10 lg:col-span-2">
        <div className="mt-20">
          <h1 className="font-poppins text-[#EFEFEF] text-4xl lg:text-5xl leading-tight tracking-wide">
            Conectando <br /> <span className="font-bold">caminhos</span>,{" "}
            <br />
            compartilhando <span className="font-bold">destinos</span>.
          </h1>
        </div>

        <div className="flex justify-center items-center flex-grow m-auto">
          <img
            src={logoPequena}
            alt="Logo do projeto VaiComigo"
            className="  object-contain max-w-3/4"
          />
        </div>
      </div>

      {/* Lado direito com formulário */}
      <div className="flex justify-center items-center flex-col w-full lg:col-span-3 gap-3 rounded-lg relative">
        <div className="absolute top-4 w-2/3 flex justify-end">
          <BotaoLogin />
        </div>

        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h6 className="poppins text-slate-900 text-2xl">Criar conta</h6>

          <div className="poppins flex flex-col w-full mb-6">
            <label htmlFor="nome" className="sr-only">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              value={usuario.nome}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="poppins flex flex-col w-full mb-6">
            <label htmlFor="usuario" className="sr-only">Usuário (e-mail)</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Usuário (e-mail)"
              className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              value={usuario.usuario}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="poppins flex flex-col w-full mb-6">
            <label htmlFor="foto" className="sr-only">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto (URL opcional)"
              className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="poppins flex flex-col w-full mb-6">
            <label htmlFor="senha" className="sr-only">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha (mínimo 8 caracteres)"
              className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
              value={usuario.senha}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="flex justify-center mt-4 w-full">
            <BotaoPrincipal label={"Cadastrar"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
