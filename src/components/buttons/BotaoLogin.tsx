import { useNavigate } from "react-router-dom";

function BotaoLogin() {

    const navigate = useNavigate();

    function login(){
        navigate('/login');
    }

    return (
        <>
            <button className="w-full max-w-[145px] h-[36px] border border-[#0D334D] text-[#0D334D] bg-transparent rounded-[10px] cursor-pointer" 
            onClick={login}>
                Login
            </button>
        </>
    )
}

export default BotaoLogin