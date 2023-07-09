import './style.css';
import menuSale from "../../assets/img/cart.png";
import homeIcon from "../../assets/img/home.png";
import userImg from "../../assets/img/user.ico"

export const Menu = () => {
    return (
        <div className='menu'>
            <div className={`sidebar_item `}>
                <img src={homeIcon} alt="home" />
                <span >Inicio</span>
            </div>
            <div className={`sidebar_item `}>
                <img src={userImg} alt="user" />
                <span >Usuário</span>
            </div>
            <div className={`sidebar_item `}>
                <img src={menuSale} alt="sale" />
                <span >vendas</span>
            </div>

        </div>
    );
}