import  { useState } from 'react';
import MenuButton from '../../assets/img/menu.png';
import gearIcon from "../../assets/img/gear.png"
import './style.css';

type NavbarProps = {
    onCollapse: () => void;
};

export const Navbar = ({ onCollapse }: NavbarProps) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const handleCollapse = () => {
        onCollapse();
    };
    const handleGearClick = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="navbar">
            <div>
                <img src={MenuButton} alt="" onClick={handleCollapse} />
            </div>
            <div>Olá, "usuário logado"</div>
            <div className="gear-container">
                <img src={gearIcon} alt="gear" onClick={handleGearClick} />
                {menuVisible && (
                    <div className="menu-options">
                        <ul>
                            <li className="full-width">Editar</li>
                            <li className="full-width">Sair</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};


