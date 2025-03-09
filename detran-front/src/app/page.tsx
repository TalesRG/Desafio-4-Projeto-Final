'use client';

import Image from "next/image";
import React, {useState} from "react";
import Button from "./ui/button";
import DetranLogo from "./ui/detran-logo";
import GenericInput from "./ui/generic-form";
import {useRouter} from "next/router";
import {login} from "@/service/user";
import {router} from "next/client";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e : any ) => {
    e.preventDefault();

    try {
      const response = await login(email, senha);
      sessionStorage.setItem('access_token', response.access_token);

    } catch (error : any) {
      setErrorMessage(error.message || 'Erro no login');
      console.error('Erro ao fazer login', error);
    }
  };


  return (
    <div className="flex md:flex-row h-screen">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 bg-[var(--backround)] flex flex-col justify-center items-center p-8">
        {/* DETRAN Logo */}
        <DetranLogo />
        <h2 className="text-lg md:text-xl font-semibold text-center">
          Acesse o site do Detran-DF
        </h2>

        <form className="mt-6 w-full max-w-xs md:max-w-md" onSubmit={handleLogin}>
          <GenericInput
            title="E-mail"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" // Pass regex pattern as a string
            placeholder="Email"
            errorMessage="Coloque um e-mail válido."
            type="email"
            onChange={(value) => setEmail(value)}
          />

          <GenericInput
            title="Senha"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$"
            placeholder="Senha"
            errorMessage="A senha deve ter pelo menos 8 caracteres e no máximo 12, incluindo letras e números."
            type="password"
            onChange={(value) => setSenha(value)}
          />

          <Button title="Login" />
        </form>
        <a href="/register" className="mt-4 text-blue-600 text-sm">
          Registre-se
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
