'use client';

import React, { useState } from 'react';
import GenericInput from '@/app/ui/generic-form';
import Button from '@/app/ui/button';
import {VeiculoRegister} from "@/type/VeiculoRegister";
import {cadastrarVeiculo} from "@/service/veiculoService";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";


const CadastroVeiculo = () => {
    const router = useRouter();
    const [placa, setPlaca] = useState('');
    const [cpf, setCpf] = useState('');
    const [categoria, setCategoria] = useState('');
    const [chassi, setChassi] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [modelo, setModelo] = useState('');

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!placa || !cpf || !categoria || !chassi || !ano || !cor || !modelo) {
                toast.error('Preencha todos os campos');
                return;
            }

            const data : VeiculoRegister = {
                placa : placa,
                cpf_proprietario : cpf,
                categoria: categoria,
                chassi : chassi,
                ano : Number(ano),
                cor : cor,
                modelo : modelo
            }
            await cadastrarVeiculo(data);
            toast.success('Veículo cadastrado com sucesso!');
            router.push('/home/carro');

        }catch (error : any) {
           toast.error('Erro ao cadastrar veículo');
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
                    errorMessage="Placa inválida. Deve seguir o padrão AAA-0000."
                    onChange={(value) => setPlaca(value)}
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
                    onChange={(value) => setCategoria(value)}
                />
                <GenericInput
                    title="Chassi"
                    pattern=".+"
                    placeholder="Digite o número do chassi"
                    value={chassi}
                    errorMessage="Chassi inválido."
                    onChange={(value) => setChassi(value)}
                />
                <GenericInput
                    title="Ano"
                    pattern="^\d{4}$"
                    placeholder="Digite o ano"
                    value={ano}
                    errorMessage="Ano inválido. Deve conter 4 dígitos."
                    type="number"
                    onChange={(value) => setAno(value)}
                />
                <GenericInput
                    title="Cor"
                    pattern=".+"
                    placeholder="Digite a cor"
                    value={cor}
                    errorMessage="Cor inválida."
                    onChange={(value) => setCor(value)}
                />
                <GenericInput
                    title="Modelo"
                    pattern=".+"
                    placeholder="Digite o modelo"
                    value={modelo}
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
