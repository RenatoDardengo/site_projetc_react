import React, { ChangeEvent } from "react";
import "./style.css";

interface InputTextProps {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value?: string | number;
    defaultValue?: string | number;
}

export const InputText: React.FC<InputTextProps> = ({
    placeholder,
    onChange,
    name,
    value,
    defaultValue,
}) => {
    return (
        <input
            className="input-text"
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            value={value}
            defaultValue={defaultValue}
        />
    );
};




