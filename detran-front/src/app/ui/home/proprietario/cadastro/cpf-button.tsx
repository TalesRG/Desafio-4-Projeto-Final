'use client';

import React, { useState } from 'react';

type CpfInputProps = {
  value?: string;
  onChange?: (value: string) => void; // returns only the unformatted digits
};

const CpfInput: React.FC<CpfInputProps> = ({ value = '', onChange }) => {
  // Remove any non-digit characters.
  const unmaskCpf = (cpfValue: string) => cpfValue.replace(/\D/g, '');

  // Format a CPF string to "xxx.xxx.xxx-xx", limiting to 11 digits.
  function formatCpf(cpfValue: string) {
    const digits = unmaskCpf(cpfValue).substring(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9)
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  }

  // Store the formatted CPF value in state.
  const [cpf, setCpf] = useState(formatCpf(value));
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const digits = unmaskCpf(input);
    // Prevent input beyond 11 digits.
    if (digits.length > 11) return;

    // Format the digits as CPF.
    const formatted = formatCpf(digits);
    setCpf(formatted);

    if (input.length < 14) {
      setError("CPF inválido. Deve conter 11 dígitos.");
    } else {
      setError('');
    }

    // Propagate the unformatted CPF if a callback is provided.
    if (onChange) {
      onChange(digits);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-gray-700">CPF</label>
      <input
        type="text"
        value={cpf}
        onChange={handleChange}
        placeholder="000.000.000-00"
        className=""
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CpfInput;
