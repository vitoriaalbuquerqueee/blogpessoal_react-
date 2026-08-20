import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import type Tema from '../../models/Tema';

interface CardTemaProps {
    tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
                Tema
            </header>

            <p className="p-8 text-3xl bg-slate-100 h-full">
                {tema.descricao}
            </p>

            <div className="flex">
                <Link
                    to={`/editartema/${tema.id}`}
                    className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletartema/${tema.id}`}
                    className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center py-2"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardTema;