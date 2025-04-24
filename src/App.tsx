import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
    return (
        <>
        <AuthProvider>
        <BrowserRouter>
            
            <div className="min-h-[80vh]">
                <Routes>
                <Route path="/" element={<Login />} />
                
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            
            </BrowserRouter>
        </AuthProvider>

        </>
    )
}
    export default App