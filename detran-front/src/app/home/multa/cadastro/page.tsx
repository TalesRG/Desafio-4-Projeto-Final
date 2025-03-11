'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';
import {InfracaoRegister} from "@/type/InfracaoRegister";
import {cadastroInfracao} from "@/service/infracaoService";

const CadastroMulta = () => {
    // States for each input field
    const [placa, setPlaca] = useState('');
    const [data, setData] = useState<Date | null>(null);
    const [hora, setHora] = useState('');
    const [local, setLocal] = useState('');
    const [agente, setAgente] = useState('');
    const [tipoInfracao, setTipoInfracao] = useState('');

    const handleDateChange = (dateStr: string) => {
        setData(dateStr ? new Date(dateStr) : null);
    };
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const request : InfracaoRegister = {
            hora: hora,
            placa_veiculo: placa,
            id_local: Number(local),
            matricula_agente:  agente,
            id_tipo_infracao: Number(tipoInfracao),
            data: data!
        }

        try {
            await cadastroInfracao(request);
            console.log('Multa cadastrada com sucesso');
        }catch (e) {
            console.error(e);
        }

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
                    onChange={(value) => setPlaca(value)}
                />
                <GenericInput
                    title="Data"
                    pattern="^\d{4}-\d{2}-\d{2}$"
                    placeholder="Selecione a data da multa"
                    value={data ? data.toISOString().slice(0, 10) : ''}
                    errorMessage="Data inválida. Utilize o formato AAAA-MM-DD."
                    type="date"
                    onChange={(value) => handleDateChange(value)}
                />
                <GenericInput
                    title="Hora"
                    pattern="^\d{2}:\d{2}$"
                    placeholder="Selecione a hora da multa"
                    value={hora}
                    errorMessage="Hora inválida. Utilize o formato HH:MM."
                    type="time"
                    onChange={(value) => setHora(value)}
                />
                <GenericInput
                    title="Local"
                    pattern=".+"
                    placeholder="Digite o local da infração"
                    value={local}
                    errorMessage="Local inválido."
                    onChange={(value) => setLocal(value)}
                />
                <GenericInput
                    title="Nome Agente"
                    pattern=".+"
                    placeholder="Digite o nome do agente"
                    value={agente}
                    errorMessage="Nome do agente inválido."
                    onChange={(value) => setAgente(value)}
                />
                <GenericInput
                    title="Tipo Infração"
                    pattern=".+"
                    placeholder="Digite o tipo de infração"
                    value={tipoInfracao}
                    errorMessage="Tipo de infração inválido."
                    onChange={(value) => setTipoInfracao(value)}
                />

                <div className="flex gap-4 mt-6">
                    <Button title="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default CadastroMulta;
