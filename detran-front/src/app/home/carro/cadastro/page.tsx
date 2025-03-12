'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import GenericSelect from '@/app/ui/home/dropdown-api';
import Button from '@/app/ui/button';
import { VeiculoRegister } from "@/type/VeiculoRegister";
import { cadastrarVeiculo } from "@/service/veiculoService";


const CadastroVeiculo = () => {
    // States for each input field
    const [placa, setPlaca] = useState('');
    const [cpf, setCpf] = useState('');
    const [categoria, setCategoria] = useState('');
    const [chassi, setChassi] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [modelo, setModelo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data: VeiculoRegister = {
                placa: placa,
                cpf_proprietario: cpf,
                categoria: categoria,
                chassi: chassi,
                ano: Number(ano),
                cor: cor,
                modelo: modelo
            }
            await cadastrarVeiculo(data);
            setErrorMessage('');
        } catch (error: any) {
            setErrorMessage(error.message);
        }

    };

    return (
        <div className="min-w-60 max-w-xl mx-auto p-0 md:p-10 h-full overflow-auto">
            <h1 className="text-3xl font-bold mb-6">Cadastro de Veículos</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <GenericInput
                    title="Placa"
                    pattern="^[A-Z]{3}-\d{4}$"
                    placeholder="Digite a placa do veículo"
                    value={placa}
                    maxLength={8}
                    errorMessage="Placa inválida. Deve seguir o padrão AAA-0000."
                    onChange={(value) => setPlaca(value)}
                />
                <GenericSelect
                    label="CPF"
                    endpoint="/api/cpf"
                    mapOptions={(data: any) => [
                        { label: data.placa, value: data.placa }
                    ]}
                    placeholder="Digite o CPF do proprietario"
                    value={cpf}
                    onChange={setCpf}
                />

                <GenericInput
                    title="Categoria"
                    pattern=".+"
                    placeholder="Digite a categoria"
                    value={categoria}
                    maxLength={2}
                    errorMessage="Categoria inválida."
                    onChange={(value) => setCategoria(value)}
                />
                <GenericInput
                    title="Chassi"
                    pattern=".+"
                    placeholder="Digite o número do chassi"
                    value={chassi}
                    maxLength={17}
                    errorMessage="Chassi inválido."
                    onChange={(value) => setChassi(value)}
                />
                <GenericInput
                    title="Ano"
                    pattern="^\d{4}$"
                    placeholder="Digite o ano"
                    value={ano}
                    maxLength={4}
                    errorMessage="Ano inválido. Deve conter 4 dígitos."
                    type="text"
                    onChange={(value) => setAno(value)}
                />
                <GenericInput
                    title="Cor"
                    pattern=".+"
                    placeholder="Digite a cor"
                    value={cor}
                    maxLength={20}
                    errorMessage="Cor inválida."
                    onChange={(value) => setCor(value)}
                />
                <GenericInput
                    title="Modelo"
                    pattern=".+"
                    placeholder="Digite o modelo"
                    value={modelo}
                    maxLength={20}
                    errorMessage="Modelo inválido."
                    onChange={(value) => setModelo(value)}
                />

                <div className="flex gap-4 mt-6">
                    <Button title="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default CadastroVeiculo;
