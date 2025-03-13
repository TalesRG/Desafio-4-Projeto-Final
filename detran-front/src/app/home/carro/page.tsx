"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "@/app/globals.css";
import {deletarVeiculo, listarVeiculos} from "@/service/veiculoService";

interface Veiculo {
    placa: string;
    chassi: string;
    cor: string;
    ano: number;
    modelo: string;
    categoria: number;
    cpf_proprietario: string;
}

const HomePage: React.FC = () => {
    const router = useRouter();

    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);


    const [pesquisa, setPesquisa] = useState("");


    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const carregarVeiculos = async () => {
            setLoading(true);
            try {
                const veiculoList = await listarVeiculos();
                setVeiculos(veiculoList);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Erro ao listar proprietários.");
            } finally {
                setLoading(false);
            }
        };

        carregarVeiculos();
    }, []);

    const handleBuscar = () => {

        const filtrados = veiculos.filter((v) =>
            v.placa.includes(pesquisa)
        );

        if (filtrados.length === 0) {
            toast.error("Nenhum veiculo encontrado para essa placa.");
        }

        setVeiculos(filtrados);
    };

    const handleDelete = async (placa: string) => {
        try {
            await deletarVeiculo(placa);
            setVeiculos((prev) => prev.filter((v) => v.placa !== placa));
            toast.success("Veiculo excluído com sucesso!");
        } catch (err) {
            console.error(err);
            toast.error("Erro ao excluir veiculo.");
            setError("Erro ao excluir veiculo.");
        }
    };


    const handleEdit = (cpf: string) => {
        router.push(`/home/proprietario/editar?cpf=${cpf}`);
    };


    const handleMostrarTodos = async () => {
        try {
            setLoading(true);
            const veiculoList = await listarVeiculos();
            setVeiculos(veiculoList);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Erro ao listar veiculos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center py-10 px-4">
            {/* Título da página ou seção */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Veiculos</h1>
                <p className="text-gray-600 mt-1">Gerencie veiculos aqui</p>
            </div>

            <div className="w-full max-w-4xl">
                <div className="mb-4">
                    <strong>
                        <p className="text-lg text-gray-800">Veiculos cadastrados</p>
                    </strong>
                </div>

                {/* Barra de pesquisa */}
                <div className="flex items-center space-x-2 border border-[#ccc] p-2 rounded bg-white mb-6">
                    <input
                        type="text"
                        placeholder="Pesquisar por Placa..."
                        className="border-none p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#36f325]"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <button
                        onClick={handleBuscar}
                        className="cursor-pointer px-4 py-2 bg-[#333] text-white rounded hover:bg-[#555] transition duration-300"
                    >
                        Buscar
                    </button>

                    {/* Botão para adicionar um novo proprietário */}
                    <button
                        className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                        onClick={() => router.push("/home/carro/cadastro")}
                    >
                        Novo veiculo
                    </button>
                </div>

                {/* Tabela de proprietários */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">
                        Lista de Veiculos
                    </h2>

                    <button
                        onClick={handleMostrarTodos}
                        className="cursor-pointer mb-2 px-4 py-2 bg-[#333] text-white rounded hover:bg-[#555] transition duration-300"
                    >
                        Mostrar todos
                    </button>

                    {loading && <p className="text-blue-500 mt-4">Carregando...</p>}
                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    {/* Removemos overflow-x-auto e configuramos o layout fixo + quebra de texto */}
                    <div>
                        <table className="table-fixed w-full border-collapse text-sm">
                            <thead className="bg-[#d2cd6b] text-white">
                            <tr>
                                <th className="p-3 border">Placa</th>
                                <th className="p-3 border">CPF do Proprietário</th>
                                <th className="p-3 border">Categoria</th>
                                <th className="p-3 border">Chassi</th>
                                <th className="p-3 border">Ano</th>
                                <th className="p-3 border">Cor</th>
                                <th className="p-3 border">Modelo</th>
                                <th className="p-3 border">Editar</th>
                                <th className="p-3 border">Excluir</th>
                            </tr>
                            </thead>
                            <tbody>
                            {veiculos.map((veiculo, index) => (
                                <tr key={index} className="even:bg-[#f9f9f9]">
                                    <td className="p-3 border">{veiculo.placa}</td>
                                    <td className="p-3 border">{veiculo.cpf_proprietario}</td>
                                    <td className="p-3 border">{veiculo.categoria}</td>
                                    <td className="p-3 border">{veiculo.chassi}</td>
                                    <td className="p-3 border">{veiculo.ano}</td>
                                    <td className="p-3 border">{veiculo.cor}</td>
                                    <td className="p-3 border">{veiculo.modelo}</td>

                                    {/* Botão de Editar */}
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        <button
                                            className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                                            onClick={() => handleEdit(veiculo.placa)}
                                        >
                                            Editar
                                        </button>
                                    </td>

                                    {/* Botão de Excluir */}
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        <button
                                            className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                            onClick={() => handleDelete(veiculo.placa)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {!loading && veiculos.length === 0 && (
                        <p className="mt-4 text-gray-500">Nenhum veiculo encontrado.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default HomePage;
