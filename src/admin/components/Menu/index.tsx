import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";
import userImg from "../../assets/img/user.ico"
type MenuProps = {
    collapsed: boolean;
};
export const Menu = ({ collapsed }: MenuProps) => {
    return (
        <div className="menu">
            <div className={`menu_item`}>
                <img src={homeIcon} alt="home" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Inicio</span>
            </div>
            <div className={`menu_item`}>
                <img src={userImg} alt="user" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>Usuário</span>
            </div>
            <div className={`menu_item`}>
                <img src={menuSale} alt="sale" />
                <span className={`menu_text ${collapsed ? 'menu_text_collapsed' : ''}`}>vendas</span>
            </div>
        </div>
    );
};