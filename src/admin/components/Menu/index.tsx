import React, { useState, ReactNode } from 'react';
import './style.css';
import menuSale from '../../assets/img/cart.png';
import homeIcon from '../../assets/img/home.png';
import userImg from '../../assets/img/user.ico';
import menuPost from '../../assets/img/post.png';
import menuProduct from '../../assets/img/product.png';
import { ListProduct } from '../Product/ListProduct';


type MenuProps = {
    collapsed: boolean;
    renderComponent: (component: ReactNode) => void;
};

export const Menu: React.FC<MenuProps> = ({ renderComponent, collapsed }) => {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    const [showListarProdutos, setShowListarProdutos] = useState(false);

    const handleMenuClick = (menu: string) => {
        setSelectedMenu(menu);
        setShowListarProdutos(!showListarProdutos);

        // Lógica para renderizar o componente no local desejado
        switch (menu) {
            case 'sales':
                //renderComponent(<Sales />);
                break;
            case 'products':
                renderComponent(<ListProduct />);
                break;


            default:
                break;
        }

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
                className={`menu_item ${selectedMenu === 'sales' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('sales')}
            >
                <img src={menuSale} alt="sale" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Vendas</span>
            </div>
            <div
                className={`menu_item ${selectedMenu === 'products' ? 'selected' : ''}`}
                onClick={() => handleMenuClick('products')}
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
