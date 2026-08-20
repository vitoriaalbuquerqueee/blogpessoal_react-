import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type Tema from "../../models/Tema";
import { buscar, deletar } from "../../services/Service";
import { ClipLoader } from "react-spinners";

function DeletarTema() {

    // Objeto responsável redirecionar o tema para uma outra rota
    const navigate = useNavigate();

    // Estado responsável por controlar o loader (animação de carregamento)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Estado responsável por armazenar os dados do tema que será deletado no Backend (API)
    const [tema, setTema] = useState<Tema>({} as Tema);

    // Consumo da Context para obter os dados do tema autenticado (estado usuario)
    // e a função handleLogout para efetuar logout caso o token seja inválido
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // Acessar o parâmetro da rota (id do tema)
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403') || error.toString().includes('401')) {
                handleLogout();
            } else {
                alert('Erro ao buscar o tema por id!');
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarTema() {
        setIsLoading(true);

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            alert('Tema apagado com sucesso!');
        } catch (error: any) {
            if (error.toString().includes('403') || error.toString().includes('401')) {
                handleLogout();
            } else {
                alert('Erro ao apagar o Tema!');
            }
        } finally {
            setIsLoading(false);
            retornar();
        }
    }

    function retornar() {
        navigate('/temas');
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar tema</h1>

            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                    Tema
                </header>

                <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>

                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>

                    <button
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                        onClick={deletarTema}
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarTema;