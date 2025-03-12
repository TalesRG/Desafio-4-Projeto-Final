"use client";

import React, {useState} from "react";

interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    label?: string;
    className?: string;
    error?: string;
    loading?: boolean;
}


const SelectComponent: React.FC<SelectProps> = ({ options, onChange, label, className,loading,error }) => {
    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-700">{label}</label>}
            <select
                onChange={(e) => onChange(e.target.value)}
                className={`border p-2 rounded-md ${className}`}
            >
                <option value="">Selecione...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectComponent;
