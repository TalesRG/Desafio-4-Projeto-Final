"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
 // Importa os estilos globais

export default function Home() {
  const [veiculos, setVeiculos] = useState([
    {
      placa: "ABC1234",
      cpf: "123.456.789-00",
      categoria: "Passeio",
      chassi: "1HGCM82633A123456",
      ano: 2022,
      cor: "Prata",
      modelo: "Gol",
    },
    {
      placa: "XYZ5678",
      cpf: "987.654.321-00",
      categoria: "Caminhão",
      chassi: "1HGCM82633A654321",
      ano: 2020,
      cor: "Vermelho",
      modelo: "Strada",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="bg-yellow-200 p-10 min-h-screen text-center">
      {/* Imagem do carro */}
      <div className="mt-5">
        <Image src="/assets/carro.png" alt="Carro" width={80} height={70} className="mx-auto" />
        <strong><p>Veículos cadastrados</p></strong>
      </div>

      {/* Barra de pesquisa */}
      <div className="flex items-center border-2 border-gray-300 p-3 rounded-md bg-white mx-auto w-[80%] mt-5">
        <input type="text" id="search-input" placeholder="Pesquisar..." className="border-none p-2 flex-grow rounded-md" />
        <button id="search-button" className="bg-gray-800 text-white px-3 py-2 rounded-md ml-2 hover:bg-gray-600">Buscar</button>
        <button id="add-button" className="bg-green-500 text-white px-3 py-2 rounded-md ml-2 hover:bg-green-700">Novo veículo</button>
      </div>
      <div id="search-results" className="mt-5"></div>

      {/* Tabela de veículos */}
      <div className="grid justify-center p-5">
      <div className="info-box bg-[#f0f0f0] p-5 rounded shadow-md">
        <div className="bg-gray-200 p-5 rounded-xl shadow-md w-full max-w-4xl mx-auto mt-5">
          <h2 className="bg-yellow-600 text-white p-3 rounded-xl text-lg mb-2">Dados</h2>
          {loading ? (
            <p>Carregando veículos...</p>
          ) : error ? (
            <p>Erro: {error}</p>
          ) : veiculos.length === 0 ? (
            <p>Nenhum veículo encontrado.</p>
          ) : (
            <table className="w-full border-collapse text-lg mt-5 rounded-xl">
              <thead>
                <tr className="bg-yellow-600 text-white">
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
                  <tr key={index} className="border">
                    <td className="p-3 border">{veiculo.placa}</td>
                    <td className="p-3 border">{veiculo.cpf}</td>
                    <td className="p-3 border">{veiculo.categoria}</td>
                    <td className="p-3 border">{veiculo.chassi}</td>
                    <td className="p-3 border">{veiculo.ano}</td>
                    <td className="p-3 border">{veiculo.cor}</td>
                    <td className="p-3 border">{veiculo.modelo}</td>
                    <td className="p-3 border">
                      <button className="text-blue-500">✏️</button>
                    </td>
                    <td className="p-3 border">
                      <button className="text-red-500">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        </div>
      </div>

      <footer className="mt-10 text-gray-700">
        <p>&copy; 2025 - Sistema de Informações DETRAN-DF</p>
      </footer>
    </main>
  );
}
