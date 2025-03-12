'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';
import toast from "react-hot-toast";
import CpfButton from '@/app/ui/home/proprietario/cadastro/cpf-button';
import PhoneButton from '@/app/ui/home/proprietario/cadastro/phone-button';
import StatesButton from '@/app/ui/home/proprietario/cadastro/states-button';
import SexButton from '@/app/ui/home/proprietario/cadastro/sex-button';
import { ProprietarioRegister } from "@/type/ProprietarioRegister";
import { cadastrarProprietario } from "@/service/proprietarioService";
import {useRouter} from "next/navigation";

export default function CadastroProprietario() {
  const router = useRouter();
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
  const [observacoes, setObservacoes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDateChange = (dateStr: string) => {
    setDataNascimento(dateStr ? new Date(dateStr) : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !cpf || !email || !endereco || !bairro || !cidade || !telefone || !estado || !sexo || !dataNascimento) {
        toast.error('Preencha todos os campos.');
        return;
    }

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
      toast.success('Proprietário cadastrado com sucesso.');
      router.push('/home/proprietario');
    }catch (e) {
     toast.error('Erro ao cadastrar proprietário.');
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
          placeholder="Nome Completo"
          maxLength={51} // Levado em consideração o maior nome do brasil
          onChange={(value) => setNome(value)}
        />
        <CpfButton
          value={cpf}
          onChange={(value) => setCpf(value)}
        />
        <GenericInput
          title="E-mail"
          pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
          value={email}
          errorMessage="E-mail inválido."
          placeholder="E-mail"
          maxLength={320} // Levado em consideração o limite
          onChange={(value) => setEmail(value)}
        />
        <GenericInput
          title="Endereço"
          pattern=".+"
          value={endereco}
          errorMessage="Endereço inválido."
          placeholder="Endereço"
          maxLength={100}
          onChange={(value) => setEndereco(value)}
        />
        <GenericInput
          title="Bairro"
          pattern=".+"
          value={bairro}
          errorMessage="Bairro inválido."
          placeholder="Bairro"
          maxLength={50}
          onChange={(value) => setBairro(value)}
        />
        <GenericInput
          title="Cidade"
          pattern=".+"
          value={cidade}
          errorMessage="Cidade inválida."
          placeholder="Cidade"
          maxLength={50}
          onChange={(value) => setCidade(value)}
        />
        <PhoneButton
          value={telefone}
          onChange={(value) => setTelefone(value)}
        />
        <StatesButton
          value={estado}
          onChange={(value) => setEstado(value)}
        />
        <SexButton
          value={sexo}
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
          maxLength={2}
          onChange={(value) => setPontosNaCarteira(Number(value))}
        />
        <GenericInput
          title="Observações"
          pattern=".*"
          value={observacoes}
          errorMessage="Limite de 50 caracteres."
          placeholder="Observações"
          maxLength={100}
          onChange={(value) => setCidade(value)}
        />
        <Button title="Cadastro" />
      </form>
    </div>
  );
}
