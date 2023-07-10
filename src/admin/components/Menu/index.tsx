import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";
import userImg from "../../assets/img/user.ico";
import menuPost from "../../assets/img/post.png";
import menuProduct from "../../assets/img/product.png";
import { useState } from 'react';
type MenuProps = {
    collapsed: boolean;
};
export const Menu = ({ collapsed }: MenuProps) => {
    //irá aramazenar o menu selecionado
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    //será chamado evendo click da div e receberá como argumento o menu selecionado
    const handleMenuClick = (menu: string) => {
        setSelectedMenu(menu);
    };

    
    return (
        <div className="menu">
            <div
                className={`menu_item ${selectedMenu === 'inicio' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('inicio')}
            >
                <img src={homeIcon} alt="home" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Inicio</span>
            </div>
            <div
                className={`menu_item ${selectedMenu === 'usuario' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('usuario')}
            >
                <img src={userImg} alt="user" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Usuários</span>
            </div>
            <div
                className={`menu_item ${selectedMenu === 'vendas' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('vendas')}
            >
                <img src={menuSale} alt="sale" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Vendas</span>
            </div>
            <div
                className={`menu_item ${selectedMenu === 'produto' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('produto')}
            >
                <img src={menuProduct} alt="product" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Produtos</span>
            </div>
            <div
                className={`menu_item ${selectedMenu === 'publicacao' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('publicacao')}
            >
                <img src={menuPost} alt="post" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Publicações</span>
            </div>
        </div>
    );
};