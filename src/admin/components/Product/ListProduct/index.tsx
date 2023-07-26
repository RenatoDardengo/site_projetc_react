import Car1 from "../../../assets/img/car1.webp";
import Car2 from "../../../assets/img/car2.webp";
import Car3 from "../../../assets/img/car3.jpg";
import { InputText } from "../../InputText";
import { Button } from "../../Button";
import "./style.css";
import { useState } from "react";
export const ListProduct: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div >
                <p className="title"> Cadastro de produtos</p>

            </div>
            <div className="search-components space-element">
                <InputText />
                <Button label="Cadastrar" color="flat" onClick={handleOpenModal} />

            </div>
            <div className="product-grid">
                <div className="product">
                    <img src={Car1} alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>Description for Product 1.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> <Button label="Editar" color="flat" /></p>
                        <p> <Button label="Excluir" color="flat" /></p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> <Button label="Editar" color="flat" /></p>
                        <p> <Button label="Excluir" color="flat" /></p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car3} alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description for Product 3.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> <Button label="Editar" color="flat" /></p>
                        <p> <Button label="Excluir" color="flat" /></p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> <Button label="Editar" color="flat" /></p>
                        <p> <Button label="Excluir" color="flat" /></p>
                    </div>
                </div>
                <div className="product">
                    <img src={Car2} alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description for Product 2.</p>
                    <p>R$ 100</p>
                    <div className="option-delete-edit">
                        <p> <Button label="Editar" color="flat" /></p>
                        <p> <Button label="Excluir" color="flat" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}