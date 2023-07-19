import "./style.css";
import Car1 from "../../assets/img/car1.webp";
import Car2 from "../../assets/img/car2.webp"
import Car3 from "../../assets/img/car3.jpg"
export const Sales: React.FC = () => {
    return (
        <div>
            <p className="title"> Cadastro de produtos</p>
            <div>
                <input/>
            </div>
            <div className="product-grid">
                <div className="product">
                    <img src={Car1} alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>Description for Product 1.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> Editar</p>
                        <p> Excluir</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> Editar</p>
                        <p> Excluir</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car3} alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description for Product 3.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> Editar</p>
                        <p> Excluir</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> Editar</p>
                        <p> Excluir</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> Editar</p>
                        <p> Excluir</p>
                    </div>
                </div>
            </div>
        </div>
    )
}