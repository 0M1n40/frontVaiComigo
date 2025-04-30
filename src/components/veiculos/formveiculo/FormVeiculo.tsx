import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Veiculo } from '../../../models/Veiculo';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import BotaoCadastrarVeiculoViagem from '../../buttons/BotaoCadastrarVeiculoViagem';


function FormVeiculo() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [veiculo, setVeiculo] = useState<Veiculo>({
        id: null,
        modelo: '',
        placa: '',
        tipoVeiculo: ''
    } as Veiculo)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
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
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/veiculos/all")
    }

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/veiculos/${veiculo.id}`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('O Veículo foi atualizado com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar o veículo.', "erro")
                }
            }
        } else {
            try {
                console.log(veiculo);
                await cadastrar(`/veiculos/cadastrar`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('O Veículo foi cadastrado com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar o veículo.', "erro")
                }
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex justify-center items-center h-[80vh] ">
            <div className="bg-gray-50 border-gray-300 border rounded-lg shadow-md p-8 w-full max-w-lg">
                <h1 className="text-2xl font-semibold mb-8 text-center text-[#0D334D]">
                    {id === undefined ? 'Cadastrar novo veículo' : 'Editar veículo'}
                </h1>

                <form className="flex flex-col gap-6" onSubmit={gerarNovoVeiculo}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="modelo" className="text-gray-500 text-sm">Modelo do Veículo</label>
                        <input
                            type="text"
                            placeholder="Digite o modelo do veículo"
                            name="modelo"
                            className="border-b border-gray-400 bg-transparent outline-none p-2 focus:border-gray-700"
                            value={veiculo.modelo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="placa" className="text-gray-400 text-sm">Placa</label>
                        <input
                            type="text"
                            placeholder="Digite a placa do veículo"
                            name="placa"
                            className="border-b border-gray-400 bg-transparent outline-none p-2 focus:border-gray-700"
                            value={veiculo.placa}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="tipoVeiculo" className="text-gray-400 text-sm">Tipo do Veículo</label>
                        <input
                            type="text"
                            placeholder="Digite o tipo do veículo"
                            name="tipoVeiculo"
                            className="border-b border-gray-400 bg-transparent outline-none p-2 focus:border-gray-700"
                            value={veiculo.tipoVeiculo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <BotaoCadastrarVeiculoViagem/>

                    
                </form>
            </div>
        </div>
    )
}

export default FormVeiculo;