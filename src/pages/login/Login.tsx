
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import BotaoPrincipal from '../../components/buttons/BotaoCadastrarEntrar';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
          <div className="fundoCadastro hidden lg:block"></div>
    
          <form
            className="flex justify-center items-center flex-col w-2/3 gap-3"
            onSubmit={login}
          >
            <h6 className="poppins text-slate-900 text-2xl">Login</h6>
    
            <div className="poppins flex flex-col w-full mb-6">
              <label htmlFor="email" className="sr-only">Usuário (e-mail)</label>
              <input
                type="text"
                id="email"
                name="usuario"
                placeholder="Usuário (e-mail)"
                className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                value={usuarioLogin.usuario}
                onChange={atualizarEstado}
              />
            </div>
    
            <div className="poppins flex flex-col w-full mb-6">
              <label htmlFor="senha" className="sr-only">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                value={usuarioLogin.senha}
                onChange={atualizarEstado}
              />
            </div>
    
            <BotaoPrincipal
            label={"Entrar"}
        />
          </form>
        </div>
      );
}

export default Login