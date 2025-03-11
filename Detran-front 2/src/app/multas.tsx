"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css"; // Importa os estilos globais

// Definindo o tipo de multa
interface Multa {
  placa: string;
  data: string;
  hora: string;
  local: string;
  nomeAgente: string;
  tipoInfracao: string;
}

export default function Home() {
  // Definindo o tipo para multas
  const [multas, setMultas] = useState<Multa[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Simulando dados que viriam da API
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

  // Função para buscar as multas (simulada)
  const fetchMultas = () => {
    setLoading(true);
    try {
      setMultas(simulatedMultas);
      setError(null);
    } catch (err) {
      setError("Erro ao carregar as multas.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Veículos cadastrados</h1>
        <Image
          src="/assets/detran-logo.png" // Caminho correto da imagem
          alt="Detran Logo"
          width={100}
          height={50}
        />
      </header>

      {/* Seção do usuário */}
      <div className="user">
        <Image
          src="/assets/documento.png" // Caminho correto da imagem
          alt="Carro"
          width={80}
          height={70}
        />
        <strong>
          <p>Multas</p>
        </strong>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Pesquisar..." />
        <button
          id="search-button"
          onClick={fetchMultas} // Chamando a função para simular a busca
        >
          Buscar
        </button>
        <button id="add-button">Nova multa</button>
      </div>

      {/* Resultados da pesquisa */}
      <div id="search-results"></div>

      {/* Tabela de multas */}
      <div className="info-container">
        <div className="info-box">
          <h2>Multas cadastradas</h2>

          {loading ? (
            <p>Carregando multas...</p>
          ) : error ? (
            <p>{error}</p>
          ) : multas.length === 0 ? (
            <p>Nenhuma multa encontrada.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Placa</th>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Local</th>
                  <th>Nome do agente</th>
                  <th>Tipo de infração</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {multas.map((multa, index) => (
                  <tr key={index}>
                    <td>{multa.placa}</td>
                    <td>{multa.data}</td>
                    <td>{multa.hora}</td>
                    <td>{multa.local}</td>
                    <td>{multa.nomeAgente}</td>
                    <td>{multa.tipoInfracao}</td>
                    <td>
                      <button>✏️</button>
                    </td>
                    <td>
                      <button>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <footer>
        <p>&copy; 2025 - Sistema de Informações Pessoais</p>
      </footer>
    </main>
  );
}
