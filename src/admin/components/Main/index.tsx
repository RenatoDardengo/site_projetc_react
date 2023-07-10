import React from 'react';
import "./style.css";

type MainProps = {
    children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return (
        <div>
            {children}
        </div>
    );
};