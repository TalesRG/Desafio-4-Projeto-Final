'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';

const CadastroProprietario = () => {
  // Estados para cada campo do formulário
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [estado, setEstado] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Função para tratar o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para uma API ou processá-los conforme necessário
    console.log({
      nome,
      cpf,
      email,
      endereco,
      bairro,
      cidade,
      telefone,
      estado,
      sexo,
      dataNascimento,
    });
  };

  return (
    <div className="min-w-60 max-w-xl mx-auto p-0 md:p-10 h-full overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Cadastro de Proprietários</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <GenericInput
          title="Nome"
          pattern=".+"
          placeholder="Digite seu nome"
          value={nome}
          errorMessage="Nome inválido."
          onChange={setNome}
        />
        <GenericInput
          title="CPF"
          pattern="^\d{11}$"
          placeholder="Digite o CPF (somente números)"
          value={cpf}
          errorMessage="CPF inválido. Deve conter 11 dígitos."
          onChange={setCpf}
        />
        <GenericInput
          title="E-mail"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          placeholder="Digite seu e-mail"
          value={email}
          errorMessage="E-mail inválido."
          type="email"
          onChange={setEmail}
        />
        <GenericInput
          title="Endereço"
          pattern=".+"
          placeholder="Digite seu endereço"
          value={endereco}
          errorMessage="Endereço inválido."
          onChange={setEndereco}
        />
        <GenericInput
          title="Bairro"
          pattern=".+"
          placeholder="Digite seu bairro"
          value={bairro}
          errorMessage="Bairro inválido."
          onChange={setBairro}
        />
        <GenericInput
          title="Cidade"
          pattern=".+"
          placeholder="Digite sua cidade"
          value={cidade}
          errorMessage="Cidade inválida."
          onChange={setCidade}
        />
        <GenericInput
          title="Telefone"
          pattern="^\d{10,11}$"
          placeholder="Digite seu telefone (somente números)"
          value={telefone}
          errorMessage="Telefone inválido."
          onChange={setTelefone}
        />
        <GenericInput
          title="Estado"
          pattern=".+"
          placeholder="Digite seu estado"
          value={estado}
          errorMessage="Estado inválido."
          onChange={setEstado}
        />
        <GenericInput
          title="Sexo"
          pattern=".+"
          placeholder="Digite seu sexo"
          value={sexo}
          errorMessage="Sexo inválido."
          onChange={setSexo}
        />
        <GenericInput
          title="Data de Nascimento"
          pattern="^\d{4}-\d{2}-\d{2}$"
          placeholder="Selecione sua data de nascimento"
          value={dataNascimento}
          errorMessage="Data de nascimento inválida."
          type="date"
          onChange={setDataNascimento}
        />

        <div className="flex gap-4 mt-6">
            <Button title="Cadastrar" />
        </div>
      </form>
    </div>
  );
};

export default CadastroProprietario;
