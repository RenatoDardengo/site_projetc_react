import React, { MouseEventHandler, useState } from "react";
import { Button } from "../../Button";
import { InputText } from "../../InputText";
import "./style.css"
interface CreateProductProps {
    onClose?: MouseEventHandler<HTMLButtonElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
    description?: string;
    sale?: string;
    functionDelete?: () => void;
}

export const CreateProduct: React.FC<CreateProductProps> = ({ onClose, onClick, onChange, title: initialTitle = "",
    description: initialDescription = "", sale: initialSale = "", functionDelete, }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [sale, setSale] = useState(initialSale);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
        switch (e.target.name) {
            case 'titleProduct':
                setTitle(e.target.value)
                break;
            case 'descriptionProduct':
                setDescription(e.target.value)
                break;
            case 'saleProducts':
                setSale(e.target.value)
                break;

            default:
                break;
        }
    }
    const handleCreateProduct = () => {
        // Coloque a lógica para criar o produto aqui
        // Os valores dos campos do formulário estão disponíveis em `title`, `description` e `sale`
        // Você pode chamar a função `functionDelete` e outras funções de acordo com a sua necessidade
        // Feche o modal chamando a prop onClose
        //if (onClose) onClose(e);
    };


    return (
        <div id="modal" className="modal">
            <div className="modal-content animate-zoom card-4">
                <header className="container teal">
                    <span onClick={onClose} className="button display-topright">
                        &times;
                    </span>
                    <h2>Cadastrar Produto</h2>
                </header>
                <div className="containerModal">
                    <h3> Informações do Produto</h3>
                    <div className="information-data">
                        <label>
                            Título:
                            <InputText
                                name="titleProduct"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Título do produto"
                            />
                        </label>
                        <label>
                            Descrição:
                            <InputText
                                name="descriptionProduct"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descrição produto"
                            />
                        </label>
                        <label>
                            Valor:
                            <InputText
                                name="saleProducts"
                                value={sale}
                                onChange={(e) => setSale(e.target.value)}
                                placeholder="R$"
                            />
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button onClick={handleCreateProduct} label="Cadastrar" />
                </div>
            </div>
        </div>
    );
}