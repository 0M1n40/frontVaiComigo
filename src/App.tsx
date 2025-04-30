import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from './components/navbar/Navbar';
import DeletarVeiculo from "./components/veiculos/deletarveiculo/DeletarVeiculo";
import DeletarViagem from "./components/viagens/deletarviagem/DeletarViagem";
import ListaVeiculo from "./components/veiculos/listaveiculo/ListaVeiculo";
import Home from "./pages/home/Home";
import ListaViagem from "./components/viagens/listaviagem/ListaViagem";
import NavbarWrapper from "./components/NavbarWrapper";
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo";
import FormViagem from "./components/viagens/formviagem/FormViagem";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

// Componente auxiliar para verificar e esconder o Footer em rotas específicas
function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/cadastro"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
          <Route path="/deletarviagem/:id" element={<DeletarViagem />} />
          <Route path="/veiculos/all" element={<ListaVeiculo />} />
          <Route path="/veiculos/cadastrar" element={<FormVeiculo />} />
          <Route path="/viagens/all" element={<ListaViagem />} />
          <Route path="/viagem/:id" element={<FormViagem />} />
          <Route path="/veiculos/:id" element={<FormVeiculo />} />
          <Route path="/viagens/cadastrar" element={<FormViagem />} />
        </Routes>
      </div>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
