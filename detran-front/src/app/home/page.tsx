'use client';

import React from "react";
import CardLink from "@/app/ui/home/card-link";

const DashboardPage = () => {
    const nomeUsuario = sessionStorage.getItem('nomeUsuario');
  return (
    <div>
      <h1 className="text-3xl font-bold pb-10 text-center md:text-left">
        Bem vindo, {nomeUsuario}
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-x-6 gap-y-10">
        {/* Carro Card */}
        <CardLink
          href="/home/carro"
          iconSrc="/car-side.svg"
          altText="Car Icon"
          title="Carro"
          description="Para acessar as informações do seu carro."
        />

        {/* Multa Card */}
        <CardLink
          href="/home/multa"
          iconSrc="/multa.svg"
          altText="Ticket Icon"
          title="Multa"
          description="Veja suas multas pendentes e pague online."
        />

        {/* Proprietário Card */}
        <CardLink
          href="/home/proprietario"
          iconSrc="/proprietario.svg"
          altText="Owner Icon"
          title="Proprietário"
          description="Gerencie seus dados de proprietário do veículo."
        />
      </div>
    </div>
  );
};

export default DashboardPage;
