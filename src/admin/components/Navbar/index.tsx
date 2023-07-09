import MenuButton from "../../assets/img/menu.png"
import "./style.css"
export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={MenuButton} alt="" />
            </div>
            <div>
                Usuário Logado
            </div>
            <div>
                sair
            </div>

        </div>
    );
}