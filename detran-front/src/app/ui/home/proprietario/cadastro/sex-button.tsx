'use client';

import React from 'react';

type SexoSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const SexoSelect: React.FC<SexoSelectProps> = ({ value = '', onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-gray-700">Sexo</label>
      <select
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Selecione o sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </select>
    </div>
  );
};

export default SexoSelect;
