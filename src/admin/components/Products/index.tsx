import React from 'react';
import "./style.css"
export const Products: React.FC = () => {
    return (
        <section>
            <div className='title-products'>
                <h2>Cadastro de produtos</h2>
            </div>
            <div className="table-container">
                <table id="tbl-01">
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th> Nome</th>
                            <th> Valor</th>
                            <th> Tipo</th>
                            <th> Promoção</th>
                            <th> Opções</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td> produto.id </td>
                            <td>produto.nome</td>
                            <td> produto.valor </td>
                            <td> produto.tipo </td>
                            <td> produto.promo </td>
                            <td> <a href="/admin/produto/editar/<%= produto.id%>"><img src="/images/tela-admin/edit.png" /></a> <a href="#"><img src="/images/tela-admin/delete.png" /></a></td>
                        </tr>
                        <tr>
                            <td> produto.id </td>
                            <td>produto.nome</td>
                            <td> produto.valor </td>
                            <td> produto.tipo </td>
                            <td> produto.promo </td>
                            <td> <a href="/admin/produto/editar/<%= produto.id%>"><img src="/images/tela-admin/edit.png" /></a> <a href="#"><img src="/images/tela-admin/delete.png" /></a></td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </section>
    )
}