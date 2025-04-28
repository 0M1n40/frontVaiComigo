import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from './components/navbar/Navbar';
import ListaVeiculo from "./components/veiculos/listaveiculo/ListaVeiculo";

import Home from "./pages/home/Home";
import NavbarWrapper from "./components/NavbarWrapper";

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
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/veiculo" element={<ListaVeiculo />} />
                </Routes>
            </div>
            
            </BrowserRouter>
        </AuthProvider>

        </>
    )
}
    export default App