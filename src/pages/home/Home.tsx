import vaicomigo2 from "../../utils/img/vaicomigo2.png";
import { funcionalidades } from "../../utils/Funcionalidades";
import FuncionalidadesCarrossel from "../../components/funcionalidades/FuncionalidadesCarrossel";
import CarAnimation from "../../components/funcionalidades/CarAnimation";
import BannerAnimacao from "../../components/funcionalidades/BannerAnimacao";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#0D334D] mx-auto  shadow-102 text-center md:text-left">
        <div className="flex flex-col w-200 h-90 mt-4 p-auto mr-5 ">
          <BannerAnimacao />
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2 space-y-8 mb-12 pt-12 p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-medium text-white">
              Economize, Compartilhe,
            </h2>
            <h2 className="text-5xl font-medium text-white">Chegue junto</h2>
          </div>

          <img
            src={vaicomigo2}
            alt="Imagem VaiComigo 2"
            className="w-80 h-30 object-contain"
          />

          <p className="text-lg text-white  text-center">
            Quando o caminho é compartilhado, a vida anda melhor!{" "}
          </p>
        </div>
      </section>

      {/* Sobre nós */}
      <section
        id="sobre"
        className=" max-w-7xl  mx-auto rounded-lg shadow-lg text-center mt-17 "
      >
        <h3 className="text-4xl font-bold mb-10 mt-3 ">Sobre Nós</h3>
        <h4 className="text-2xl font-semibold mb-3">
          Um convite que virou movimento
        </h4>
        <p className="text-gray-700 leading-relaxed pl-15 pr-15 pb-15 text-lg">
          <strong>VaiComigo!</strong> é uma plataforma web criada para
          transformar a maneira como motoristas e passageiros se conectam. Com
          um sistema moderno, intuitivo e 100% online. Oferecemos uma
          experiência de carona segura, prática e colaborativa — do jeito que a
          mobilidade urbana precisa ser. Pensado para quem quer economizar
          tempo, dinheiro e ainda fazer boas conexões, o VaiComigo! permite que
          motoristas cadastrem seus veículos e registrem viagens para, em um futuro proximo, facilitar o
          encontro com passageiros que estejam indo na mesma direção.
        </p>
      </section>
      <div className="">
        <div className="bg-repeat-x bg-top ">
          <CarAnimation />
        </div>
      </div>

      {/* Cadastro de veículos */}
      <section className="flex flex-col gap-16 p-8 mt-50 ">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://ik.imagekit.io/minayura/VaiComigo!/cadastro%20de%20veiculos.png?updatedAt=1745817194166"
            alt="Motorista dirigindo"
            className="md:w-1/3 rounded-xl shadow-lg"
          />

          <div className="flex flex-col md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Cadastre quantos veículos você tiver!
            </h2>
            <p className="text-gray-600 mb-6">
              Registre as informações do seus veiculos de maneira simples e rápida,
              garantindo que ele fique disponível para associar às viagens. Não há limite de registro, basta estar devidamente legalizado!
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/veiculos/cadastrar"
                className="bg-[#0D334D] text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition "
              >
                Cadastrar meu Veículo
              </Link>
            </div>
          </div>
        </div>

        {/* Cadastro de viagens */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-9 mt-12 mb-12">
          <img
            src="https://ik.imagekit.io/minayura/VaiComigo!/cadastro%20de%20viagens.png?updatedAt=1745817192918"
            alt="Viagens"
            className="md:w-1/3 rounded-xl shadow-lg"
          />

          <div className="flex flex-col md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Criar suas viagens como quiser
            </h2>
            <p className="text-gray-600 mb-6">
              No VaiComigo!, cada viagem é uma oportunidade de economizar,
              socializar e fazer o seu caminho valer ainda mais a pena. Comece
              agora a compartilhar seus trajetos de forma prática e segura. Vi sair e tem vaga no seu automóvel? Não perca tempo!
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/viagens/cadastrar"
                className="bg-[#0D334D] text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition "
              >
                Começar uma viagem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <div className="bg-[#0D334D] flex flex-col md:flex-row items-center justify-center pt-7">
        <div className="px-6 max-w-5xl mx-auto text-center ">
          <h1 className="md:text-4xl font-bold text-white mb-4">
            Faça login para ter acesso as funcionalidades!
          </h1>
          <p className="text-gray-300 text-3x1 mt-5">
            Veja viagens aregistradas, veículos cadastrados, atualizaçõe personalizadas e 
            muito mais.
          </p>
          <div className="space-y-4 mt-7">
            <button className="bg-blue-200  px-6 py-3 rounded-md hover:bg-blue-300 transition duration-200">
              <Link to="/login" className=" text-black ">
                {" "}
                Faça login na sua conta{" "}
              </Link>
            </button>
            <p className="text-sm text-gray-200">
              Não tem uma conta?
              <Link to="/cadastro" className=" text-blue-300  px-2 rounded-lg">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://ik.imagekit.io/minayura/VaiComigo!/login.png?updatedAt=1745822786920"
            alt="Imagem login"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Funcionalidades */}
      <div className="flex flex-col items-center mt-10 mb-20">
        <FuncionalidadesCarrossel funcionalidades={funcionalidades} />
      </div>

      {/* Footer */}
    </main>
  );
}

export default Home;
