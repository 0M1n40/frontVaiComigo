import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from './components/navbar/Navbar';
import DeletarVeiculo from "./components/veiculos/deletarveiculo/DeletarVeiculo";
import DeletarViagem from "./components/viagens/deletarviagem/DeletarViagem";
import ListaVeiculo from "./components/veiculos/listaveiculo/ListaVeiculo";
import Home from "./pages/home/Home";
import ListaViagem from "./components/viagens/listaviagem/ListaViagem";
import CardViagem from "./components/viagens/cardviagem/CardViagem";
import NavbarWrapper from "./components/NavbarWrapper";
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo";
import CardVeiculo from "./components/veiculos/cardveiculo/CardVeiculo";
import FormViagem from "./components/viagens/formviagem/FormViagem";


function App() {
    
    return (
        <>
        <AuthProvider>
            
        <BrowserRouter>

            <NavbarWrapper>
                <Navbar/>
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
                <Route path="/viagem/:id" element={<CardViagem />} />
                <Route path="/veiculos/:id" element={<CardVeiculo/>} />
                <Route path="/viagens/cadastrar" element={<FormViagem />} />

                </Routes>
            </div>
            
            </BrowserRouter>
        </AuthProvider>

        </>
    )
}
    export default App