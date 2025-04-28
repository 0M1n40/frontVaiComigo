
import vaicomigo2 from "../../utils/img/vaicomigo2.png";
import { funcionalidades } from "../../utils/Funcionalidades";
import FuncionalidadesCarrossel from "../../components/funcionalidades/FuncionalidadesCarrossel";
import Footer from "../../components/footer/Footer";
import CarAnimation from "../../components/funcionalidades/CarAnimation";
import BannerAnimacao from "../../components/funcionalidades/BannerAnimacao";


function Home() {
   
  return (
    <main className="min-h-screen text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#0D334D] mx-auto  shadow-102 text-center md:text-left">
        <div className="flex flex-col w-160 h-90 mt-4 p-auto mr-5 ">
          <BannerAnimacao />
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2 space-y-8 mb-12 pt-12 mr-10">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium text-white">Economize, Compartilhe,</h2>
            <h2 className="text-4xl font-medium text-white">Chegue junto</h2>
          </div>

          <img
            src={vaicomigo2}
            alt="Imagem VaiComigo 2"
            className="w-80 h-20 object-contain"
          />

          <p className="text-lg text-white mt-6 text-center">
            Sabe aquele "Ah, vai comigo!" que resolve tudo? Agora virou site!
          </p>
        </div>
      </section>

      {/* Sobre nós */}
      <section id="sobre" className="p-20 px-6 max-w-5xl mx-auto rounded-lg shadow-lg text-center mt-12">
        <h3 className="text-4xl font-semibold mb-20">Sobre Nós</h3>
        <h4 className="text-2xl font-semibold mb-3">Um convite que virou movimento</h4>
        <p className="text-gray-700 leading-relaxed">
          O <strong>VaiComigo!</strong> é uma plataforma web que conecta motoristas e passageiros, promovendo caronas de maneira segura, organizada e eficiente.
          Nosso sistema foi pensado para trazer facilidade tanto para quem oferece quanto para quem busca uma carona, com uma estrutura moderna e focada na segurança do usuário.
          Aqui, tudo acontece de forma online e intuitiva, com autenticação segura via token JWT, garantindo que todas as interações sejam protegidas.
        </p>
        <CarAnimation />
      </section>

      {/* Cadastro de veículos */}
      <section className="flex flex-col gap-16 p-8 mt-18">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://ik.imagekit.io/minayura/VaiComigo!/cadastro%20de%20veiculos.png?updatedAt=1745817194166"
            alt="Motorista dirigindo"
            className="w-full md:w-1/3 rounded-xl shadow-lg ml-20"
          />

          <div className="flex flex-col md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Cadastre quantos veículos tiver!</h2>
            <p className="text-gray-600 mb-6">
              Registre as informações do seu carro de maneira simples e rápida, garantindo que ele fique disponível para associar às viagens.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                Começar
              </a>
              <a href="#" className="text-black underline hover:text-gray-700 transition">
                Já tem uma conta? Fazer login
              </a>
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
            <h2 className="text-3xl font-bold mb-4">Criar suas viagens como quiser</h2>
            <p className="text-gray-600 mb-6">
              No VaiComigo!, cada viagem é uma oportunidade de economizar, socializar e fazer o seu caminho valer ainda mais a pena. Comece agora a compartilhar seus trajetos de forma prática e segura.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                Começar
              </a>
              <a href="#" className="text-black underline hover:text-gray-700 transition">
                Confira como funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <div className="bg-[#0D334D] flex flex-col md:flex-row items-center justify-center  pt-7">
        <div className="px-6 max-w-5xl mx-auto text-center  pl-30">
          <h1 className="md:text-3xl font-bold text-white mb-4">Faça login para ver sua atividade recente</h1>
          <p className="text-gray-400 text-sm mt-5">
            Veja viagens anteriores, sugestões personalizadas, recursos de suporte e muito mais.
          </p>
          <div className="space-y-4 mt-7">
            <button className="bg-blue-300 text-blue-950 px-6 py-3 rounded-md hover:bg-blue-400 transition duration-200">
              Faça login na sua conta
            </button>
            <p className="text-sm text-gray-200">
              Não tem uma conta?{" "}
              <a href="#" className="underline hover:text-blue-600">
                Cadastre-se
              </a>
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
      <Footer />
    </main>
  );
}

export default Home;

