'use client';

import React, { useEffect, useState } from 'react';

type Estado = {
  id: number;
  sigla: string;
  nome: string;
};

type EstadosSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const EstadosSelect: React.FC<EstadosSelectProps> = ({ value = '', onChange }) => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        if (!response.ok) {
          throw new Error('Erro ao buscar estados');
        }
        const data: Estado[] = await response.json();
        // Optionally sort states by name
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(data);
      } catch (err) {
        setError('Não foi possível carregar os estados');
      } finally {
        setLoading(false);
      }
    };

    fetchEstados();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  if (loading) {
    return <p>Carregando estados...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-gray-700">Estado</label>
      <select
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Selecione um estado</option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome} ({estado.sigla})
          </option>
        ))}
      </select>
    </div>
  );
};

export default EstadosSelect;
