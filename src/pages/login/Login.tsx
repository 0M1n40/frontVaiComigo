import { useNavigate } from 'react-router-dom';
import './Login.css';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import BotaoPrincipal from '../../components/buttons/BotaoCadastrarEntrar';
import vaiComigoLogo from '../../utils/img/VaiComigo.png';
import BotaoCadastrarUsuario from '../../components/buttons/BotaoCadastrarUsuario';

function Login() {
    const navigate = useNavigate();

    const { usuario, handleLogin } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 h-screen">
            {/* Lado esquerdo com fundo azul e logo */}
            <div className="relative bg-[#0D334D] h-full hidden lg:flex flex-col justify-between p-10 lg:col-span-2">
                <div className="mt-20">
                    <h1 className="font-poppins text-[#EFEFEF] text-4xl lg:text-5xl leading-tight tracking-wide">
                        Conectando <br /> <span className="font-bold">caminhos</span>, <br />
                        compartilhando <span className="font-bold">destinos</span>.
                    </h1>
                </div>

                <div className="flex justify-center">
                    <img
                        src={vaiComigoLogo}
                        alt="Logo do projeto VaiComigo"
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Lado direito com formulário */}
            <div className="flex justify-center items-center flex-col w-full lg:col-span-3 gap-3 rounded-lg relative">
                {/* Botão de cadastro no topo */}
                <div className="absolute top-4 w-2/3 flex justify-end">
                    <BotaoCadastrarUsuario />
                </div>

                {/* Formulário de login */}
                <form
                    className="flex justify-center items-center flex-col w-2/3 gap-3 mt-24"
                    onSubmit={login}
                >
                    <h6 className="poppins text-slate-900 text-2xl">Login</h6>

                    <div className="poppins flex flex-col w-full mb-6">
                        <label htmlFor="usuario" className="sr-only">Usuário (e-mail)</label>
                        <input
                            type="email"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário (e-mail)"
                            className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                            required
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
                            required
                        />
                    </div>

                    {/* Botão principal de enviar o formulário */}
                    <BotaoPrincipal label={"Entrar"} />
                </form>
            </div>
        </div>
    );
}

export default Login;
