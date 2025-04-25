
 
 function Home() {
    return (
      <main className="min-h-screen bg-red-600 text-gray-900">
     
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-[#0D334D]">
          <h2 className="text-4xl font-extrabold  text-white mb-6">Bem-vindo à nossa página!</h2>
          <p className="text-lg text-white mb-6">
            Aqui você encontra tudo que precisa para começar com Tailwind CSS e React.
          </p>
        
        </section>
  
        {/* Sobre nós */}
        <section id="sobre" className="py-20 px-6 max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Sobre Nós</h3>
          <p className="text-gray-700 leading-relaxed">
            Somos apaixonados por tecnologia e desenvolvimento front-end. Nosso objetivo é tornar
            o aprendizado mais acessível e prático para todos que desejam evoluir como devs.
          </p>
        </section>
  
        {/* Rodapé */}
       
      </main>
    );
  }
  export default Home;