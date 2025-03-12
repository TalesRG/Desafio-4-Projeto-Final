"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Simulação de dados para a tabela (você substituirá isso com dados reais de uma API)
  const dadosPessoais = [
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      email: "joao@exemplo.com",
      endereco: "Rua Exemplo, 123",
      bairro: "Centro",
      cidade: "São Paulo",
      telefone: "(11) 98765-4321",
      estado: "SP",
      sexo: "Masculino",
      nascimento: "1990-01-01",
    },
  ];

  const observacoes = [
    { observacao: "Observação 1" },
    { observacao: "Observação 2" },
  ];

  const pontuacaoCnh = [
    { pontos: 5 },
  ];

  return (
    <main className="font-sans bg-[#F4EDB4] p-8">
      {/* Imagem do usuário */}
      <div className="mt-[70px] mb-[35px] flex justify-center items-center">
        <Image
          src="/assets/user-interface.png"
          alt="Usuário"
          width={80}
          height={70}
        />
        <strong className="ml-2">
          <p>Proprietário</p>
        </strong>
      </div>

      {/* Barra de pesquisa */}
      <div className="flex items-center border-2 border-[#ccc] p-2 rounded bg-white mb-5">
        <input
          type="text"
          id="search-input"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-none p-2 w-full rounded"
        />
        <button id="search-button" className="px-4 py-2 bg-[#333] text-white rounded ml-2">
          Buscar
        </button>
        <button id="add-button" className="px-4 py-2 bg-[#36f325] text-white rounded ml-2">
          Novo cadastro
        </button>
      </div>

      <div id="search-results"></div>

      {/* Informações do usuário */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Dados pessoais */}
        <div className="info-box bg-[#f0f0f0] p-5 rounded shadow-md">
          <h2 className="bg-[#b1a448] text-white p-3 rounded mb-3 text-lg">Dados pessoais</h2>
          <table className="w-full table-auto border-collapse text-xs mb-5">
            <thead>
              <tr>
                <th className="border p-2">Nome</th>
                <th className="border p-2">CPF</th>
                <th className="border p-2">E-mail</th>
                <th className="border p-2">Endereço</th>
                <th className="border p-2">Bairro</th>
                <th className="border p-2">Cidade</th>
                <th className="border p-2">Telefone</th>
                <th className="border p-2">Estado</th>
                <th className="border p-2">Sexo</th>
                <th className="border p-2">Data de nascimento</th>
                <th className="border p-2">Editar</th>
                <th className="border p-2">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {dadosPessoais.map((dados, index) => (
                <tr key={index}>
                  <td className="border p-2">{dados.nome}</td>
                  <td className="border p-2">{dados.cpf}</td>
                  <td className="border p-2">{dados.email}</td>
                  <td className="border p-2">{dados.endereco}</td>
                  <td className="border p-2">{dados.bairro}</td>
                  <td className="border p-2">{dados.cidade}</td>
                  <td className="border p-2">{dados.telefone}</td>
                  <td className="border p-2">{dados.estado}</td>
                  <td className="border p-2">{dados.sexo}</td>
                  <td className="border p-2">{dados.nascimento}</td>
                  <td className="border p-2">
                    <button className="text-yellow-500">✏️</button>
                  </td>
                  <td className="border p-2">
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="text-center mt-10 text-gray-600">
        <p>&copy; 2025 - Sistema de Informações DETRAN-DF</p>
      </footer>
    </main>
  );
}
