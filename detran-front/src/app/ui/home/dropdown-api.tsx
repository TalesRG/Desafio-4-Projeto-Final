'use client';

import React, { useEffect, useState } from 'react';

type Option = {
  label: string;
  value: string | number;
};

type GenericSelectProps = {
  label?: string;
  endpoint: string;
  mapOptions: (data: any) => Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const GenericSelect: React.FC<GenericSelectProps> = ({
  label,
  endpoint,
  mapOptions,
  value = '',
  onChange,
  placeholder = 'Selecione uma opção',
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        const mappedOptions = mapOptions(data);
        setOptions(mappedOptions);
      } catch (err) {
        setError('Não foi possível carregar as opções');
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [endpoint, mapOptions]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-2 mb-5">
      {label && <label className="text-gray-700">{label}</label>}
      <select value={value} onChange={handleChange} className="border border-gray-300 rounded p-2">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenericSelect;
