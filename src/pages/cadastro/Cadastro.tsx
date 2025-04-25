import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Usuario } from "../../models/Usuario"
import { cadastrarUsuario } from "../../service/Service"
import "./Cadastro.css";
import BotaoPrincipal from "../../components/buttons/BotaoCadastrarEntrar";

function Cadastro() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false) //deixar isLoading ai por enquanto
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")
    const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
    })
    
    useEffect(() => {
        if (usuario.id !== 0 && usuario.id !== null){
        retornar()
    }
}, [usuario])

function retornar(){
    navigate('/login')
    }
    
function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
}

function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){ //dar uma olhada nisso
    setConfirmaSenha(e.target.value)
}

async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){ 
    e.preventDefault()
    
    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
        setIsLoading(true)
        try {
        await cadastrarUsuario(`/usuarios/cadastro`, usuario, setUsuario) //estava: /usuarios/cadastrar tem que dar uma olhada
        alert("Usuário cadastrado com sucesso!")
    } catch (error) {
        alert("Erro ao cadastrar o usuário!")
        }

        setIsLoading(false)
    } else {
        alert("Dados do usuário inconsistentes! Verifique as informações do cadastro.")
        setUsuario({...usuario, senha: ''})
        setConfirmaSenha('')
    }
}

    return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' 
        onSubmit={cadastrarNovoUsuario}>
            <h6 className= 'poppins text-slate-900 text-2xl'>Criar conta</h6>
            
        <div className="poppins flex flex-col w-full mb-6">

            <label htmlFor="nome" className="sr-only">Nome</label>
            <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
            value={usuario.nome}
            onChange={atualizarEstado}
            />
        </div>
        
        <div className="poppins flex flex-col w-full mb-6">

            <label htmlFor="usuario" className="sr-only">Usuário (email)</label >
            <input 
            type="text" 
            id="usuario" 
            name="usuario" 
            placeholder="Usuário (e-mail)"
            className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
            value={usuario.usuario}
            onChange={atualizarEstado}
            />
        </div>

        <div className="poppins flex flex-col w-full mb-6">

            <label htmlFor="foto" className="sr-only">Foto</label>
            <input 
            type="text" 
            id="foto" 
            name="foto" 
            placeholder="Foto"
            className="border-b border-gray-300 bg-transparent p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
            value={usuario.foto}
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
            value={usuario.senha}
            onChange={atualizarEstado}
            />
        </div>
        <div className="flex justify-center mt-4 w-full">
        <BotaoPrincipal
            label={isLoading ? "Carregando..." : "Cadastrar"}
        />
        </div>
        </form>
    </div>
    );
}

    export default Cadastro;
