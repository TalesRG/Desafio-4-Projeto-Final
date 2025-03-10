'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';


const CadastroVeiculo = () => {
    // States for each input field
    const [placa, setPlaca] = useState('');
    const [cpf, setCpf] = useState('');
    const [categoria, setCategoria] = useState('');
    const [chassi, setChassi] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [modelo, setModelo] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode realizar o cadastro do veículo, por exemplo, enviando os dados para uma API.
        console.log({ cpf, categoria, chassi, ano, cor, modelo });
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
                    errorMessage="Placa inválida. Deve seguir o padrão AAA-0000."
                    onChange={setPlaca}
                />
                <GenericInput
                    title="CPF do Proprietário"
                    pattern="^\d{11}$"
                    placeholder="Digite o CPF do proprietário"
                    value={cpf}
                    errorMessage="CPF inválido. Deve conter 11 dígitos."
                    onChange={setCpf}
                />
                <GenericInput
                    title="Categoria"
                    pattern=".+"
                    placeholder="Digite a categoria"
                    value={categoria}
                    errorMessage="Categoria inválida."
                    onChange={setCategoria}
                />
                <GenericInput
                    title="Chassi"
                    pattern=".+"
                    placeholder="Digite o número do chassi"
                    value={chassi}
                    errorMessage="Chassi inválido."
                    onChange={setChassi}
                />
                <GenericInput
                    title="Ano"
                    pattern="^\d{4}$"
                    placeholder="Digite o ano"
                    value={ano}
                    errorMessage="Ano inválido. Deve conter 4 dígitos."
                    type="number"
                    onChange={setAno}
                />
                <GenericInput
                    title="Cor"
                    pattern=".+"
                    placeholder="Digite a cor"
                    value={cor}
                    errorMessage="Cor inválida."
                    onChange={setCor}
                />
                <GenericInput
                    title="Modelo"
                    pattern=".+"
                    placeholder="Digite o modelo"
                    value={modelo}
                    errorMessage="Modelo inválido."
                    onChange={setModelo}
                />

                <div className="flex gap-4 mt-6">
                    <Button title="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default CadastroVeiculo;
