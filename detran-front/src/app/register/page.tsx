'use client';

import Image from "next/image";
import React, { useState } from "react";
import Button from "@/app/ui/button";
import DetranLogo from "@/app/ui/detran-logo";
import GenericInput from "@/app/ui/generic-form";
import { register } from "@/service/user";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter(); // Inicialização correta do hook
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepetida, setSenhaRepetida] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (senha !== senhaRepetida) {
            setErrorMessage("As senhas não coincidem.");
            return;
        }
        try {
            await register({ nome, email, senha });
            setErrorMessage('');
            router.push('/');
        } catch (error: any) {
            setErrorMessage('Erro ao registrar usuário.');
            console.error('Erro ao fazer registro', error);
        }
    };

    return (
        <div className="flex md:flex-row h-screen">
            <div className="w-full md:w-1/2 bg-[var(--backround)] flex flex-col justify-center items-center p-8">
                <DetranLogo />
                <form className="mt-6 w-full max-w-xs md:max-w-md" onSubmit={handleRegister}>
                    <GenericInput
                        title="Nome"
                        pattern="^[a-zA-Z]{2,30}$"
                        placeholder="Nome"
                        errorMessage="O nome deve ter pelo menos 2 caracteres."
                        type="text"
                        onChange={(value) => setNome(value)}
                    />

                    <GenericInput
                        title="Email"
                        pattern="^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$"
                        placeholder="Email"
                        errorMessage="E-mail inválido. (Ex.: seuemail@dominio.com)"
                        type="email"
                        onChange={(value) => setEmail(value)}
                    />

                    <GenericInput
                        title="Senha"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$"
                        placeholder="Senha"
                        errorMessage="A senha deve ter entre 8 e 12 caracteres, incluindo letras e números."
                        type="password"
                        onChange={(value) => setSenha(value)}
                    />

                    <GenericInput
                        title="Repetir Senha"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$"
                        placeholder="Repita a senha"
                        errorMessage="As senhas devem coincidir."
                        type="password"
                        onChange={(value) => setSenhaRepetida(value)}
                    />

                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

                    <Button title="Registrar" />
                </form>

                <a href="/login" className="mt-4 text-sm">Login</a>
            </div>

            <div className="hidden md:block md:w-1/2">
                <Image
                    width={1920}
                    height={1080}
                    src="/detran-lateral.png"
                    alt="Detran-DF Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default function Home() {
    return <LoginPage />;
}
