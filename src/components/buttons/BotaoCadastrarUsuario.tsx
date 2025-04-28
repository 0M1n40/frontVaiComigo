import { useNavigate } from "react-router-dom";

function BotaoCadastrarUsuario({ className }: { className?: string }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/cadastro');
    }

    return (
        <button className={`${className} w-full max-w-[145px] h-[36px] border border-[#0D334D] text-[#0D334D] bg-transparent rounded-[10px] cursor-pointer`}
        onClick={handleClick}>
            Cadastrar
        </button>
    )
}

export default BotaoCadastrarUsuario;
