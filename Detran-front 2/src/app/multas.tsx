"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Definindo os tipos
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

export default function Home() {
  // Definindo os estados para veículos e multas
  const [veiculos, setVeiculos] = useState<Veiculo[]>([
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

  const [multas, setMultas] = useState<Multa[]>([]);
  const [loadingVeiculos, setLoadingVeiculos] = useState<boolean>(false);
  const [loadingMultas, setLoadingMultas] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Simulando dados de multas
  const simulatedMultas: Multa[] = [
    {
      placa: "ABC1234",
      data: "2025-03-10",
      hora: "14:30",
      local: "Rua A, 123",
      nomeAgente: "Agente 1",
      tipoInfracao: "Estacionamento irregular",
    },
    {
      placa: "XYZ5678",
      data: "2025-03-11",
      hora: "16:00",
      local: "Avenida B, 456",
      nomeAgente: "Agente 2",
      tipoInfracao: "Velocidade excessiva",
    },
  ];

  useEffect(() => {
    setLoadingVeiculos(true);
    setTimeout(() => {
      setLoadingVeiculos(false);
    }, 1000);
  }, []);

  // Função para buscar as multas (simulada)
  const fetchMultas = () => {
    setLoadingMultas(true);
    try {
      setMultas(simulatedMultas);
      setError(null);
    } catch (err) {
      setError("Erro ao carregar as multas.");
    } finally {
      setLoadingMultas(false);
    }
  };

  return (
    <main className="bg-yellow-200 p-10 min-h-screen text-center">
      {/* Seção de multas */}
      <div className="mt-5">
        <Image src="/assets/documento.png" alt="Multa" width={80} height={70} className="mx-auto" />
        <strong><p>Multas cadastradas</p></strong>
      </div>

      {/* Barra de pesquisa para multas */}
      <div className="flex items-center border-2 border-[#ccc] p-2 rounded bg-white mb-6 max-w-4xl mx-auto">
        <input
          type="text"
          id="search-input"
          placeholder="Pesquisar multa..."
          className="border-none p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#36f325]"
        />
        <button
          id="search-button"
          onClick={fetchMultas}
          className="px-4 py-2 bg-[#333] text-white rounded ml-2 hover:bg-[#555] transition duration-300"
        >
          Buscar
        </button>
        <button
          id="add-button"
          className="px-4 py-2 bg-[#36f325] text-white rounded ml-2 hover:bg-[#2fa022] transition duration-300"
        >
          Nova multa
        </button>
      </div>

      {/* Tabela de multas */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Multas cadastradas</h2>

        {loadingMultas ? (
          <p className="text-center">Carregando multas...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : multas.length === 0 ? (
          <p className="text-center">Nenhuma multa encontrada.</p>
        ) : (
          <table className="w-full table-auto border-collapse text-xs">
            <thead className="bg-[#d2cd6b] text-white">
              <tr>
                <th className="border p-2">Placa</th>
                <th className="border p-2">Data</th>
                <th className="border p-2">Hora</th>
                <th className="border p-2">Local</th>
                <th className="border p-2">Nome do agente</th>
                <th className="border p-2">Tipo de infração</th>
              </tr>
            </thead>
            <tbody>
              {multas.map((multa, index) => (
                <tr key={index} className="even:bg-[#f9f9f9]">
                  <td className="border p-2">{multa.placa}</td>
                  <td className="border p-2">{multa.data}</td>
                  <td className="border p-2">{multa.hora}</td>
                  <td className="border p-2">{multa.local}</td>
                  <td className="border p-2">{multa.nomeAgente}</td>
                  <td className="border p-2">{multa.tipoInfracao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Rodapé */}
      <footer className="text-center mt-10 text-gray-600">
        <p>&copy; 2025 - Sistema de Informações Pessoais</p>
      </footer>
    </main>
  );
}
