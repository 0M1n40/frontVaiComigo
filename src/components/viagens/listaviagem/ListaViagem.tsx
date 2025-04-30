
import { useNavigate } from 'react-router-dom';
import { Viagem } from '../../../models/Viagem';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../service/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import {  Oval } from 'react-loader-spinner';
import CardViagem from '../cardviagem/CardViagem';


function ListaViagem() {

    const navigate = useNavigate();

    const [viagens, setViagens] = useState<Viagem[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function fetchViagens() {
        try {
            await buscar('/viagens/all', setViagens, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        fetchViagens()    
    }, [viagens.length])
    
    return (
        <>
        {viagens.length === 0 && (
  <div className="flex items-center justify-center h-screen">
    <Oval
      visible={true}
      height={120}
      width={120}
      color="#60A5FA" // azul claro (Tailwind: blue-400)
      ariaLabel="loading"
      secondaryColor="#BFDBFE" // opcional: azul ainda mais claro
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
)}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {viagens.map((viagem) => (
                            <CardViagem key={viagem.id} viagem={viagem} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaViagem;