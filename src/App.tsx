import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from './components/navbar/Navbar';
import ListaVeiculo from "./components/veiculos/listaveiculo/ListaVeiculo";
import Home from "./pages/home/Home";
import ListaViagem from "./components/viagens/listaviagem/ListaViagem";
import CardViagem from "./components/viagens/cardviagem/CardViagem";


function App() {
    return (
        <>
        <AuthProvider>
            
        <BrowserRouter>
    
            <Navbar />
            <div className="min-h-[80vh]">
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/veiculo" element={<ListaVeiculo />} />
                <Route path="/viagens" element={<ListaViagem />} />
                <Route path="/viagem/:id" element={<CardViagem />} />
                </Routes>
            </div>
            
            </BrowserRouter>
        </AuthProvider>

        </>
    )
}
    export default App


