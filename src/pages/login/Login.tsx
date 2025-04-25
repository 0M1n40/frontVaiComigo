
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin} = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

return (
        <form onSubmit={login} className='flex flex-col w-full max-w-md gap-6'>
            <div className="text-center">
                <h2 className="text-slate-900 text-2xl font-bold">Login</h2>    
            </div>

            <div className="flex flex-col">
                <label htmlFor='usuario' className='text-gray-600 mb-1'>Email</label>
                <input 
                    type="email"
                    id='usuario'  
                    placeholder="email@exemplo.com" 
                    className="border border-gray-300 focus:outline-none py-2"
                    onChange={atualizarEstado}
                    value={usuarioLogin.usuario}
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="senha" className="text-gray-600 mb-1">Senha</label>
                <input 
                    type="password"
                    id="senha"
                    placeholder="Senha" 
                    className="border border-gray-300 focus:outline-none py-2"
                    onChange={atualizarEstado}
                    value={usuarioLogin.senha}
                    required
                />
            </div>

            {/* <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#4ecdc4] hover:bg-[#38b9b3] text-white py-2 rounded w-full transition duration-200 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
            {isLoading ? "Entrando..." : "Entrar"}    
            </button> */}
        
        </form>
    )
}

export default Login