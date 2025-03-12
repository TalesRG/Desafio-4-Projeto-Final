'use client';

import React, {useEffect, useState} from 'react';
import GenericInput from '@/app/ui/generic-form';
import GenericSelect from '@/app/ui/home/dropdown-api';
import Button from '@/app/ui/button';
import { InfracaoRegister } from '@/type/InfracaoRegister';
import {cadastroInfracao, listarInfracoes} from '@/service/infracaoService';
import SelectComponent from "@/app/ui/forms/selectComponent";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {listarLocais} from "@/service/localService";
import {Local} from "@/type/Local";
import {listarTipoInfracao} from "@/service/tipoInfracaoService";
import {TipoInfracao} from "@/type/TipoInfracao";
import {listarAgentes} from "@/service/agenteDeTransitoService";
import {AgenteDeTransito} from "@/type/AgenteDeTransito";
import {listarVeiculos} from "@/service/veiculoService";
import {VeiculoRegister} from "@/type/VeiculoRegister";

const CadastroMulta = () => {
    // States for each input field
    const router = useRouter();
    const [placa, setPlaca] = useState('');
    const [data, setData] = useState<Date | null>(null);
    const [hora, setHora] = useState('');
    const [local, setLocal] = useState('');
    const [agente, setAgente] = useState('');
    const [tipoInfracao, setTipoInfracao] = useState('');

    const [multasOptions, setMultasOptions] = useState<{ label: string; value: string }[]>([]);
    const [localOptions, setLocalOptions] = useState<{ label: string; value: string }[]>([]);
    const [tipoInfracaoOptions, setTipoInfracaoOptions] = useState<{ label: string; value: string }[]>([]);
    const [agenteDeTransitoOptions, setAgenteDeTransitoOptions] = useState<{ label: string; value: string }[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const veiculoList = await listarVeiculos();
                const localList = await listarLocais();
                const tipoInfracaoList = await listarTipoInfracao();
                const agentesList = await listarAgentes();

                const newMultasOptions = veiculoList
                    .map((veiculo: VeiculoRegister) => ({
                        label: veiculo.placa,
                        value: veiculo.placa,
                    }));


                const newLocalOptions = localList
                    .filter((local: Local) => local.nome && local.nome.trim() !== "")
                    .map((local: Local) => ({
                        label: local.nome,
                        value: local.id_local.toString(),
                    }));

                const newTipoInfracaoOptions = tipoInfracaoList
                    .filter((tipoInfracao: TipoInfracao) => tipoInfracao.nome && tipoInfracao.nome.trim() !== "")
                    .map((tipoInfracao: TipoInfracao) => ({
                        label: tipoInfracao.nome,
                        value: tipoInfracao.id_tipo_infracao.toString(),
                    }));

                const newAgentesOptions = agentesList
                    .filter((agenteDeTransito: AgenteDeTransito) => agenteDeTransito.nome && agenteDeTransito.nome.trim() !== "")
                    .map((agenteDeTransito: AgenteDeTransito) => ({
                        label: agenteDeTransito.nome,
                        value: agenteDeTransito.matricula,
                    }));
                setAgenteDeTransitoOptions(newAgentesOptions);
                setTipoInfracaoOptions(newTipoInfracaoOptions);
                setLocalOptions(newLocalOptions);
                setMultasOptions(newMultasOptions);
            } catch (err) {
                setError("Não foi possível carregar as opções");
            }finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleDateChange = (dateStr: string) => {
        setData(dateStr ? new Date(dateStr) : null);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!hora || !placa || !local || !agente || !tipoInfracao || !data) {
            toast.error('Preencha todos os campos');
            return;
        }

        const request : InfracaoRegister = {
            hora: hora,
            placa_veiculo: placa,
            id_local: Number(local),
            matricula_agente:  agente,
            id_tipo_infracao: Number(tipoInfracao),
            data: data!
        };

        try {
            await cadastroInfracao(request);
            router.push('/home/multa');
            toast.success('Multa cadastrada com sucesso');
        }catch (e) {
            toast.error('Erro ao cadastrar multa');
        }
    };



    return (
        <div className="min-w-60 max-w-xl mx-auto p-0 md:p-10 h-full overflow-auto">
            <h1 className="text-3xl font-bold mb-6">Cadastro de Multas</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold">Escolha um veículo:</h2>
                <SelectComponent
                    options={multasOptions}
                    onChange={setPlaca}
                    className="flex flex-col gap-2 mb-5"
                    loading={loading}
                    error={error}
                />

                <GenericInput
                    title="Data"
                    pattern="^\d{4}-\d{2}-\d{2}$"
                    placeholder="Selecione a data da multa"
                    value={data ? data.toISOString().slice(0, 10) : ''}
                    maxLength={10}
                    errorMessage="Data inválida. Utilize o formato DD-MM-AAAA."
                    type="date"
                    onChange={(value) => handleDateChange(value)}
                />

                <GenericInput
                    title="Hora"
                    pattern="^\d{2}:\d{2}$"
                    placeholder="Selecione a hora da multa"
                    value={hora}
                    maxLength={5}
                    errorMessage="Hora inválida. Utilize o formato HH:MM."
                    type="time"
                    onChange={(value) => setHora(value)}
                />

                <SelectComponent
                    options={localOptions}
                    onChange={(value) => setLocal(value)}
                    className="flex flex-col gap-2 mb-5"
                    label={"Local"}
                    loading={loading}
                    error={error}
                />

                <SelectComponent
                    options={agenteDeTransitoOptions}
                    onChange={(value) => setAgente(value)}
                    className="flex flex-col gap-2 mb-5"
                    label={"Agente de Trânsito"}
                    loading={loading}
                    error={error}
                />

                <SelectComponent
                    options={tipoInfracaoOptions}
                    onChange={(value) => setTipoInfracao(value)}
                    className="flex flex-col gap-2 mb-5"
                    label={"Tipo de Infração"}
                    loading={loading}
                    error={error}
                />

                <div className="flex gap-4 mt-6">
                    <Button title="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default CadastroMulta;
