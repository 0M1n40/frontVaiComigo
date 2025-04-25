import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div>
                <div className='w-full flex justify-center md-flex py-6
            			  bg-[#0D334D] text-white px-10'>

                    <div className="container flex justify-between text-gray-300 text-lg">

                    </div>

                    <div className='flex gap-20 space-x-6 font-popping-light text-[#a2aeb6]'>
                        <Link to='' className=''>Viagens</Link>
                        <Link to='' className=''>Veículos</Link>
                        <Link to='' className=''>Cadastrar</Link>
                        
                            <Link to='' className=''>Sair</Link>

                        


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar