'use client';

import Image from "next/image";
import React from "react";
import Button from "@/app/ui/button";
import DetranLogo from "@/app/ui/detran-logo";
import GenericInput from "@/app/ui/generic-form";

const LoginPage = () => {
    return (
        <div className="flex md:flex-row h-screen">
            {/* Left Side: Login Form */}
            <div className="w-full md:w-1/2 bg-[var(--backround)] flex flex-col justify-center items-center p-8">
                {/* DETRAN Logo */}
                <DetranLogo />
                <h2 className="text-lg md:text-xl font-semibold text-center">
                    Acesse o site do Detran-DF
                </h2>

                <form className="mt-6 w-full max-w-xs md:max-w-md">

                    <GenericInput
                        title="Nome"
                        pattern="^[a-zA-Z]{2,30}$"
                        placeholder="Nome"
                        errorMessage="O nome deve ter pelo menos 2 caracteres."
                        type="text"
                    />

                    <GenericInput
                        title="E-mail"
                        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" // Pass regex pattern as a string
                        placeholder="Email"
                        errorMessage="E-mail Inválido. (Ex.:seuemail@dominio.com)"
                        type="email"
                    />

                    <GenericInput
                        title="Senha"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$"
                        placeholder="Senha"
                        errorMessage="A senha deve ter pelo menos 8 caracteres e no máximo 12, incluindo letras e números."
                        type="password"
                    />

                    <Button title="Registrar" />
                </form>
                <a href="/" className="mt-4 text-blue-600 text-sm">
                    Login
                </a>
            </div>

            {/* Right Side: Image */}
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
