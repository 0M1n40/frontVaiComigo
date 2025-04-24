function BotaoSair() {

    function logout(){
        console.log('sair da pag')
    }

    return (
    <button className="w-full max-w-[104px] h-[48px] border  border-[#FFFFFF] text-[#FFFFFF] rounded-[19px] cursor-pointer" onClick={logout}>
    Clique aqui
    </button>
    )
}

export default BotaoSair