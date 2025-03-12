"use client";

import React, { useEffect, useState } from "react";
import {
    listarInfracoes,
    recuperarAgentePorMatricula,
    recuperarInfracaoPorId,
    recuperarLocalPorId,
    // excluirInfracao,  <- Exemplo de função que você pode ter no seu service
} from "@/service/infracaoService";
import { InfracaoRegister } from "@/type/InfracaoRegister";
import { useRouter } from "next/navigation";

interface Veiculo {
    placa: string;
    cpf: string;
    categoria: string;
    chassi: string;
    ano: number;
    cor: string;
    modelo: string;
}

interface Multa {
    placa: string;
    data: string;
    hora: string;
    local: string;
    nomeAgente: string;
    tipoInfracao: string;
}

const HomePage: React.FC = () => {
    const router = useRouter();
    const [multas, setMultas] = useState<Multa[]>([]);
    const [loadingVeiculos, setLoadingVeiculos] = useState<boolean>(false);
    const [loadingMultas, setLoadingMultas] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInfracao = async () => {
            try {
                const infracoesList = await listarInfracoes();
                const newMultasOptions: Multa[] = [];

                for (const infracao of infracoesList) {
                    const local = await recuperarLocalPorId(infracao.id_local);
                    const agente = await recuperarAgentePorMatricula(infracao.matricula_agente);
                    const tipoInfracao = await recuperarInfracaoPorId(infracao.id_tipo_infracao);

                    newMultasOptions.push({
                        placa: infracao.placa_veiculo,
                        data: infracao.data,
                        hora: infracao.hora,
                        local: local.nome,
                        nomeAgente: agente.nome,
                        tipoInfracao: tipoInfracao.nome,
                    });
                }
                setMultas(newMultasOptions);
            } catch (err) {
                console.error(err);
                setError("Erro ao listar infrações.");
            }
        };

        fetchInfracao();

        // Simulação de loading
        setLoadingVeiculos(true);
        setTimeout(() => {
            setLoadingVeiculos(false);
        }, 1000);
    }, []);

    // Função para buscar as multas (simulada)
    const fetchMultas = () => {
        setLoadingMultas(true);
        try {
            setError(null);
        } catch (err) {
            setError("Erro ao carregar as multas.");
        } finally {
            setLoadingMultas(false);
        }
    };

    // Exemplo de função para excluir
    const handleDelete = async (placa: string) => {
        try {
            // Se tiver um service específico para exclusão, chame-o aqui. Exemplo:
            // await excluirInfracao(placa);
            // Atualizar a lista de multas sem a que foi excluída:
            setMultas((prevMultas) => prevMultas.filter((m) => m.placa !== placa));
            alert(`Multa de placa ${placa} excluída com sucesso!`);
        } catch (err) {
            console.error(err);
            setError("Erro ao excluir a multa.");
        }
    };

    // Função para editar (leva a uma página de edição, por exemplo)
    const handleEdit = (placa: string) => {
        router.push(`/home/multa/editar?placa=${placa}`);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 flex flex-col items-center py-10 px-4">
            {/* Título da página ou seção */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Sistema de Multas</h1>
                <p className="text-gray-600 mt-1">Gerencie suas multas aqui</p>
            </div>

            {/* Seção de multas */}
            <div className="w-full max-w-4xl">
                <div className="mb-4">
                    <strong>
                        <p className="text-lg text-gray-800">Multas cadastradas</p>
                    </strong>
                </div>

                {/* Barra de pesquisa para multas */}
                <div className="flex items-center space-x-2 border border-[#ccc] p-2 rounded bg-white mb-6">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Pesquisar multa..."
                        className="border-none p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#36f325]"
                    />
                    <button
                        id="search-button"
                        onClick={fetchMultas}
                        className="px-4 py-2 bg-[#333] text-white rounded hover:bg-[#555] transition duration-300"
                    >
                        Buscar
                    </button>
                    <button
                        id="add-button"
                        className="px-4 py-2 bg-[#36f325] text-white rounded hover:bg-[#2fa022] transition duration-300"
                        onClick={() => router.push("/home/multa/cadastro")}
                    >
                        Nova multa
                    </button>
                </div>

                {/* Tabela de multas */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">
                        Multas cadastradas
                    </h2>

                    <table className="w-full table-auto border-collapse text-sm">
                        <thead className="bg-[#d2cd6b] text-white">
                        <tr>
                            <th className="border p-2">Placa</th>
                            <th className="border p-2">Data</th>
                            <th className="border p-2">Hora</th>
                            <th className="border p-2">Local</th>
                            <th className="border p-2">Nome do agente</th>
                            <th className="border p-2">Tipo de infração</th>
                            <th className="border p-2">Excluir</th>
                            <th className="border p-2">Editar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {multas.map((multa: Multa, index) => (
                            <tr key={index} className="even:bg-[#f9f9f9]">
                                <td className="border p-2 text-gray-700">{multa.placa}</td>
                                <td className="border p-2 text-gray-700">{multa.data}</td>
                                <td className="border p-2 text-gray-700">{multa.hora}</td>
                                <td className="border p-2 text-gray-700">{multa.local}</td>
                                <td className="border p-2 text-gray-700">{multa.nomeAgente}</td>
                                <td className="border p-2 text-gray-700">{multa.tipoInfracao}</td>

                                {/* Botão de Excluir */}
                                <td className="border p-2 text-gray-700">
                                    <button
                                        className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => handleDelete(multa.placa)}
                                    >
                                        Excluir
                                    </button>
                                </td>

                                {/* Botão de Editar */}
                                <td className="border p-2 text-gray-700">
                                    <button
                                        className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                                        onClick={() => handleEdit(multa.placa)}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* Exibindo mensagens de erro ou estado de loading */}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {loadingMultas && <p className="text-blue-500 mt-4">Carregando multas...</p>}
                </div>
            </div>
        </main>
    );
};

export default HomePage;
