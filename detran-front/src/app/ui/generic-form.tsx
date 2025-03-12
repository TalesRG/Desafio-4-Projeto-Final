'use client';

import React, { useState } from 'react';

type GenericInputProps = {
  title?: string;             // Label to display above the input
  pattern: string;            // Regex pattern string for validation
  value?: string;             // Initial value (optional)
  placeholder?: string;       // Placeholder text for the input
  errorMessage?: string;      // Error message to display on validation failure
  type?: string;              // Input type (default is 'text')
  maxLength?: number;         // Maximum length of the input
  onChange?: (value: string) => void; // Callback to send the updated value
};

const GenericInput: React.FC<GenericInputProps> = ({
  title,
  pattern,
  value = '',
  placeholder = '',
  errorMessage = 'Invalid input',
  type = 'text',
  maxLength,
  onChange,
}) => {
  // Construct the RegExp from the string pattern.
  const regex = new RegExp(pattern);

  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Validate using the constructed regex instance.
    if (!regex.test(newValue)) {
      setError(errorMessage);
    } else {
      setError('');
    }

    // Propagate the change if a callback is provided.
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      {title && <label className="text-gray-700">{title}</label>}
      <input
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className=""
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default GenericInput;
