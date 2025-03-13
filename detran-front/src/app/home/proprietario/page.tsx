"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
    deletarProprietario,
    listarProprietarios
} from "@/service/proprietarioService";

import "@/app/globals.css";

interface Proprietario {
    cpf: string;
    nome: string;
    email: string;
    endereco: string;
    bairro: string;
    cidade: string;
    telefone: string;
    estado: string;
    sexo: string;
    data_nascimento: string;
    pontos_na_carteira: number;
}

const HomePage: React.FC = () => {
    const router = useRouter();

    const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);


    const [pesquisa, setPesquisa] = useState("");


    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const carregarProprietarios = async () => {
            setLoading(true);
            try {
                const proprietarioList = await listarProprietarios();
                setProprietarios(proprietarioList);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Erro ao listar proprietários.");
            } finally {
                setLoading(false);
            }
        };

        carregarProprietarios();
    }, []);

    const handleBuscar = () => {
        // Se não tiver nada no campo de pesquisa, avisa o usuário ou simplesmente retorna
        if (!pesquisa.trim()) {
            toast.error("Digite um CPF para buscar.");
            return;
        }

        const filtrados = proprietarios.filter((p) =>
            p.cpf.includes(pesquisa)
        );

        if (filtrados.length === 0) {
            toast.error("Nenhum proprietário encontrado para esse CPF.");
        }

        setProprietarios(filtrados);
    };

    const handleDelete = async (cpf: string) => {
        try {
             await deletarProprietario(cpf);
            setProprietarios((prev) => prev.filter((p) => p.cpf !== cpf));
            toast.success("Proprietário excluído com sucesso!");
        } catch (err) {
            console.error(err);
            toast.error("Erro ao excluir proprietário.");
            setError("Erro ao excluir proprietário.");
        }
    };

    // --------------------------------------------------------------------------------
    // 4) Editar proprietário
    // --------------------------------------------------------------------------------
    const handleEdit = (cpf: string) => {
        router.push(`/home/proprietario/editar?cpf=${cpf}`);
    };

    // --------------------------------------------------------------------------------
    // 5) Mostrar todos os proprietários
    // --------------------------------------------------------------------------------
    const handleMostrarTodos = async () => {
        try {
            setLoading(true);
            const proprietarioList = await listarProprietarios();
            setProprietarios(proprietarioList);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Erro ao listar proprietários.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center py-10 px-4">
            {/* Título da página ou seção */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Proprietários</h1>
                <p className="text-gray-600 mt-1">Gerencie proprietários aqui</p>
            </div>

            <div className="w-full max-w-4xl">
                <div className="mb-4">
                    <strong>
                        <p className="text-lg text-gray-800">Proprietários cadastrados</p>
                    </strong>
                </div>

                {/* Barra de pesquisa */}
                <div className="flex items-center space-x-2 border border-[#ccc] p-2 rounded bg-white mb-6">
                    <input
                        type="text"
                        placeholder="Pesquisar por CPF..."
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
                        onClick={() => router.push("/home/proprietario/cadastro")}
                    >
                        Novo Proprietário
                    </button>
                </div>

                {/* Tabela de proprietários */}
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">
                        Lista de Proprietários
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
                                <th className="border p-2 whitespace-normal break-words">Nome</th>
                                <th className="border p-2 whitespace-normal break-words">CPF</th>
                                <th className="border p-2 whitespace-normal break-words">E-mail</th>
                                <th className="border p-2 whitespace-normal break-words">Endereço</th>
                                <th className="border p-2 whitespace-normal break-words">Bairro</th>
                                <th className="border p-2 whitespace-normal break-words">Cidade</th>
                                <th className="border p-2 whitespace-normal break-words">Telefone</th>
                                <th className="border p-2 whitespace-normal break-words">Estado</th>
                                <th className="border p-2 whitespace-normal break-words">Sexo</th>
                                <th className="border p-2 whitespace-normal break-words">Data de Nascimento</th>
                                <th className="border p-2 whitespace-normal break-words">Pontos na Carteira</th>
                                <th className="border p-2 whitespace-normal break-words">Editar</th>
                                <th className="border p-2 whitespace-normal break-words">Excluir</th>
                            </tr>
                            </thead>
                            <tbody>
                            {proprietarios.map((prop, index) => (
                                <tr key={index} className="even:bg-[#f9f9f9]">
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.nome}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.cpf}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.email}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.endereco}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.bairro}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.cidade}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.telefone}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.estado}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.sexo}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.data_nascimento}
                                    </td>
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        {prop.pontos_na_carteira.toString()}
                                    </td>

                                    {/* Botão de Editar */}
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        <button
                                            className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                                            onClick={() => handleEdit(prop.cpf)}
                                        >
                                            Editar
                                        </button>
                                    </td>

                                    {/* Botão de Excluir */}
                                    <td className="border p-2 text-gray-700 whitespace-normal break-words">
                                        <button
                                            className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                                            onClick={() => handleDelete(prop.cpf)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {!loading && proprietarios.length === 0 && (
                        <p className="mt-4 text-gray-500">Nenhum proprietário encontrado.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default HomePage;
