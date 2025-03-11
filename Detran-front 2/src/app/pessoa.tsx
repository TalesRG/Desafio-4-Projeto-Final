"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./globals.css"; // Certifique-se de ter o arquivo de estilos na pasta correta

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
    <main>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Informações Pessoais</h1>
        <Image
          src="/assets/detran-logo.png"
          alt="Logo Detran"
          width={100}
          height={50}
        />
      </header>

      {/* Imagem do usuário */}
      <div className="user">
        <Image
          src="/assets/user-interface.png"
          alt="Usuário"
          width={80}
          height={70}
        />
        <strong>
          <p>Proprietário</p>
        </strong>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button id="search-button">Buscar</button>
        <button id="add-button">Novo cadastro</button>
      </div>

      <div id="search-results"></div>

      {/* Informações do usuário */}
      <div className="info-container">
        {/* Dados pessoais */}
        <div className="info-box">
          <h2>Dados pessoais</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>E-mail</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Telefone</th>
                <th>Estado</th>
                <th>Sexo</th>
                <th>Data de nascimento</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {dadosPessoais.map((dados, index) => (
                <tr key={index}>
                  <td>{dados.nome}</td>
                  <td>{dados.cpf}</td>
                  <td>{dados.email}</td>
                  <td>{dados.endereco}</td>
                  <td>{dados.bairro}</td>
                  <td>{dados.cidade}</td>
                  <td>{dados.telefone}</td>
                  <td>{dados.estado}</td>
                  <td>{dados.sexo}</td>
                  <td>{dados.nascimento}</td>
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
        </div>

        {/* Observações */}
        <div className="info-box">
          <h2>Observações</h2>
          <table>
            <thead>
              <tr>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {observacoes.map((observacao, index) => (
                <tr key={index}>
                  <td>{observacao.observacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pontuação na CNH */}
        <div className="info-box">
          <h2>Pontuação na CNH</h2>
          <table>
            <thead>
              <tr>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {pontuacaoCnh.map((pontuacao, index) => (
                <tr key={index}>
                  <td>{pontuacao.pontos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rodapé */}
      <footer>
        <p>&copy; 2025 - Sistema de Informações DETRAN-DF</p>
      </footer>
    </main>
  );
}
