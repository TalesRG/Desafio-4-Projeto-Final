'use client';

import React, { useState } from 'react';

type TelefoneInputProps = {
  value?: string;
  onChange?: (value: string) => void; // returns only the unformatted digits
};

const TelefoneInput: React.FC<TelefoneInputProps> = ({ value = '', onChange }) => {
  // Remove any non-digit characters.
  const unmaskTelefone = (telValue: string) => telValue.replace(/\D/g, '');

  // Format a telephone string to:
  // - (XX) XXXX-XXXX for 10-digit numbers, or
  // - (XX) X XXXX-XXXX for 11-digit numbers.
  // For partial inputs, it applies a progressive formatting.
  function formatTelefone(telValue: string) {
    const digits = unmaskTelefone(telValue).substring(0, 11);
    const len = digits.length;

    if (len === 0) return '';
    if (len < 3) return `(${digits}`;

    const area = digits.slice(0, 2);
    let formatted = `(${area})`;

    // Format complete 10-digit numbers as (XX) XXXX-XXXX.
    if (len === 10) {
      const part1 = digits.slice(2, 6);
      const part2 = digits.slice(6, 10);
      formatted += ` ${part1}-${part2}`;
    }
    // Format complete 11-digit numbers as (XX) X XXXX-XXXX.
    else if (len === 11) {
      const first = digits.slice(2, 3);
      const part2 = digits.slice(3, 7);
      const part3 = digits.slice(7, 11);
      formatted += ` ${first} ${part2}-${part3}`;
    }
    // For partial inputs that are neither complete 10 nor 11 digits,
    // display progressively formatted value.
    else {
      formatted += ` ${digits.slice(2)}`;
    }
    return formatted;
  }

  const [telefone, setTelefone] = useState(formatTelefone(value));
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const digits = unmaskTelefone(input);
    // Prevent input beyond 11 digits.
    if (digits.length > 11) return;

    const formatted = formatTelefone(digits);
    setTelefone(formatted);

    if (input.length < 13) {
      setError("Telefone inválido. Deve conter 10 ou 11 dígitos.");
    } else {
      setError('');
    }

    if (onChange) {
      onChange(digits);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-gray-700">Telefone</label>
      <input
        type="text"
        value={telefone}
        onChange={handleChange}
        placeholder="(XX) X XXXX-XXXX"
        className="border border-gray-300 rounded p-2"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TelefoneInput;
