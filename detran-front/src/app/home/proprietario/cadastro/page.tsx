'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';
import {ProprietarioRegister} from "@/type/ProprietarioRegister";
import {cadastrarProprietario} from "@/service/proprietarioService";

export default function CadastroProprietario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [estado, setEstado] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState<Date | null>(null);
  const [pontosNaCarteira, setPontosNaCarteira] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDateChange = (dateStr: string) => {
    setDataNascimento(dateStr ? new Date(dateStr) : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ProprietarioRegister = {
      nome,
      cpf,
      email,
      endereco,
      bairro,
      cidade,
      telefone,
      estado,
      sexo,
      data_nascimento: dataNascimento!,
      pontos_na_carteira: pontosNaCarteira,
    };

    try {
      await cadastrarProprietario(data);
      setErrorMessage('');
    }catch (e) {
      console.error(e);
      setErrorMessage('Erro ao cadastrar proprietário.');
    }
  };

  return (
      <div className="min-w-60 max-w-xl mx-auto p-0 md:p-10 h-full overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Cadastro de Proprietários</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <GenericInput
              title="Nome"
              pattern=".+"
              value={nome}
              errorMessage="Nome inválido."
              onChange={(value) => setNome(value)}
          />
          <GenericInput
              title="CPF"
              pattern="^\\d{11}$"
              value={cpf}
              placeholder="Somente números"
              errorMessage="CPF inválido. Deve conter 11 dígitos."
              onChange={(value) => setCpf(value)}
          />
          <GenericInput
              title="E-mail"
              pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
              value={email}
              errorMessage="E-mail inválido."
              onChange={(value) => setEmail(value)}
          />
          <GenericInput
              title="Endereço"
              pattern=".+"
              value={endereco}
              errorMessage="Endereço inválido."
              onChange={(value) => setEndereco(value)}
          />
          <GenericInput
              title="Bairro"
              pattern=".+"
              value={bairro}
              errorMessage="Bairro inválido."
              onChange={(value) => setBairro(value)}
          />
          <GenericInput
              title="Cidade"
              pattern=".+"
              value={cidade}
              errorMessage="Cidade inválida."
              onChange={(value) => setCidade(value)}
          />
          <GenericInput
              title="Telefone"
              pattern="^\d{10,11}$"
              value={telefone}
              placeholder="Somente números"
              errorMessage="Telefone inválido."
              onChange={(value) => setTelefone(value)}
          />
          <GenericInput
              title="Estado"
              pattern=".+"
              value={estado}
              errorMessage="Estado inválido."
              onChange={(value) => setEstado(value)}
          />
          <GenericInput
              title="Sexo"
              pattern=".+"
              value={sexo}
              errorMessage="Sexo inválido."
              onChange={(value) => setSexo(value)}
          />
          <GenericInput
              title="Data de Nascimento"
              pattern="^\d{4}-\d{2}-\d{2}$"
              value={dataNascimento ? dataNascimento.toISOString().slice(0, 10) : ''}
              type="date"
              errorMessage="Data de nascimento inválida."
              onChange={(value) => handleDateChange(value)}
          />
          <GenericInput
              title="Pontos na Carteira"
              pattern="^\d+$"
              value={pontosNaCarteira.toString()}
              errorMessage="Deve ser um número válido."
              onChange={(value) => setPontosNaCarteira(Number(value))}
          />
          <Button title="Cadastro"/>
        </form>
      </div>
  );
}
