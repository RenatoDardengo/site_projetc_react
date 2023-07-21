import React, { MouseEventHandler } from "react";
import "./style.css";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label?: string;
    color?: string; 
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, color }) => {
    return (
        <button
            className={color ? "flat" : "btn"}
            style={color ? { backgroundColor: color } : {}}
            onClick={onClick}
        >
            {label}
        </button>
    );
};


