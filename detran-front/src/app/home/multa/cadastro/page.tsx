'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';

const CadastroMulta = () => {
    // States for each input field
    const [placa, setPlaca] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [local, setLocal] = useState('');
    const [nomeAgente, setNomeAgente] = useState('');
    const [tipoInfracao, setTipoInfracao] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para uma API ou processá-los conforme necessário
        console.log({ placa, data, hora, local, nomeAgente, tipoInfracao });
    };

    return (
        <div className="min-w-60 max-w-xl mx-auto p-0 md:p-10 h-full overflow-auto">
            <h1 className="text-3xl font-bold mb-6">Cadastro de Multas</h1>
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
                    title="Data"
                    pattern="^\d{4}-\d{2}-\d{2}$"
                    placeholder="Selecione a data da multa"
                    value={data}
                    errorMessage="Data inválida. Utilize o formato AAAA-MM-DD."
                    type="date"
                    onChange={setData}
                />
                <GenericInput
                    title="Hora"
                    pattern="^\d{2}:\d{2}$"
                    placeholder="Selecione a hora da multa"
                    value={hora}
                    errorMessage="Hora inválida. Utilize o formato HH:MM."
                    type="time"
                    onChange={setHora}
                />
                <GenericInput
                    title="Local"
                    pattern=".+"
                    placeholder="Digite o local da infração"
                    value={local}
                    errorMessage="Local inválido."
                    onChange={setLocal}
                />
                <GenericInput
                    title="Nome Agente"
                    pattern=".+"
                    placeholder="Digite o nome do agente"
                    value={nomeAgente}
                    errorMessage="Nome do agente inválido."
                    onChange={setNomeAgente}
                />
                <GenericInput
                    title="Tipo Infração"
                    pattern=".+"
                    placeholder="Digite o tipo de infração"
                    value={tipoInfracao}
                    errorMessage="Tipo de infração inválido."
                    onChange={setTipoInfracao}
                />

                <div className="flex gap-4 mt-6">
                    <Button title="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default CadastroMulta;
