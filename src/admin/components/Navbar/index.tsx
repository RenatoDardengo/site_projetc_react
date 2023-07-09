import React from 'react';
import MenuButton from '../../assets/img/menu.png';
import './style.css';
type NavbarProps = {
    onCollapse: () => void;
};
export const Navbar = ({ onCollapse }: NavbarProps) => {
    const handleCollapse = () => {
        onCollapse();
    };

    return (
        <div className="navbar">
            <div>
                <img src={MenuButton} alt="" onClick={handleCollapse} />
            </div>
            <div>Usuário Logado</div>
            <div>sair</div>
        </div>
    );
};

