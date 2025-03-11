"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./globals.css"; // Importa os estilos globais

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

  // Simulação de dados carregando, já que a API ainda não está disponível
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simula o carregamento de dados
  }, []);

  return (
    <main>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Veículos cadastrados</h1>
        <Image src="/assets/detran-logo.png" alt="Detran Logo" width={100} height={50} />
      </header>

      {/* Imagem do carro */}
      <div className="user">
        <Image src="/assets/carro.png" alt="Carro" width={80} height={70} />
        <strong><p>Veículo</p></strong>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Pesquisar..." />
        <button id="search-button">Buscar</button>
        <button id="add-button">Novo veículo</button>
      </div>
      <div id="search-results"></div>

      {/* Tabela de veículos */}
      <div className="info-container">
        <div className="info-box">
          <h2>Veículos</h2>

          {loading ? (
            <p>Carregando veículos...</p>
          ) : error ? (
            <p>Erro: {error}</p>
          ) : veiculos.length === 0 ? (
            <p>Nenhum veículo encontrado.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Placa</th>
                  <th>CPF do Proprietário</th>
                  <th>Categoria</th>
                  <th>Chassi</th>
                  <th>Ano</th>
                  <th>Cor</th>
                  <th>Modelo</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {veiculos.map((veiculo, index) => (
                  <tr key={index}>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.cpf}</td>
                    <td>{veiculo.categoria}</td>
                    <td>{veiculo.chassi}</td>
                    <td>{veiculo.ano}</td>
                    <td>{veiculo.cor}</td>
                    <td>{veiculo.modelo}</td>
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

      <footer>
        <p>&copy; 2025 - Sistema de Informações DETRAN-DF</p>
      </footer>
    </main>
  );
}
