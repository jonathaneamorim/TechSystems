import { editarProduto, excluirProduto, exibirInfoProdutos } from "./manipularProdutos.js";

const productGridElement = document.getElementById('corpoGridProduto');

export const renderGridProducts = () => {

    var dadosLocalStorage = JSON.parse(localStorage.getItem('data'));
    var produtos = dadosLocalStorage.produto;

    if(produtos == null || produtos == '') {
        productGridElement.innerHTML = "<p>Ainda não existem dados! Insira no botão Adicionar.<p/>"
    } else {
        productGridElement.innerHTML = "";

        produtos.forEach(produto => {
            productGridElement.innerHTML += `
                <tr>
                    <td>${produto.cod_produto}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.quantidade}</td>
                    <td class="d-flex justify-content-evenly">
                        <button class="iconGrid bg-transparent border rounded visualizarProduto" type="button" id="visualizarProduto" value="${produto.cod_produto}">
                            <img width="80%" height="80%" src="../../media/svg/view-svgrepo-com.svg">
                        </button> 
                        <button class="iconGrid bg-transparent border rounded editarProduto" type="button" id="editarProduto" value="${produto.cod_produto}">
                            <img width="80%" height="80%" src="../../media/svg/edit.png">
                        </button>
                        <button class="iconGrid bg-transparent border rounded excluirProduto" type="button" id="excluirProduto" value="${produto.cod_produto}">
                            <img width="80%" height="80%" src="../../media/svg/delete.png">
                        </button>
                    </td>
                </tr>  
            `;
        });
    
        var view = document.querySelectorAll('.visualizarProduto');
        var edit = document.querySelectorAll('.editarProduto');
        var del = document.querySelectorAll('.excluirProduto');
        
        view.forEach(button => {
            button.addEventListener('click', () => {
                exibirInfoProdutos(button.value);
            });
        });
    
        edit.forEach(button => {
            button.addEventListener('click', () => {
                editarProduto(button.value);
            })
        });
    
        del.forEach(button => {
            button.addEventListener('click', () => {
                excluirProduto(button.value);
            })
        });
    }
}

export function renderGridPedidos() {

    var dadosLocalStorage = JSON.parse(localStorage.getItem('data'));

    var produtos = dadosLocalStorage.produto;

    productGridElement.innerHTML = "";

    produtos.forEach(produto => {
        productGridElement.innerHTML += `
            <tr>
                <td>${produto.cod_produto}</td>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.quantidade}</td>
                <td class="d-flex justify-content-evenly">
                    <button class="iconGrid bg-transparent border rounded visualizarProduto" type="button" id="visualizarProduto" value="${produto.cod_produto}">
                        <img width="80%" height="80%" src="../../media/svg/view-svgrepo-com.svg">
                    </button> 
                    <button class="iconGrid bg-transparent border rounded" type="button" id="editarProduto" value="${produto.cod_produto}">
                        <img width="80%" height="80%" src="../../media/svg/edit.png">
                    </button>
                    <button class="iconGrid bg-transparent border rounded" type="button" id="excluirProduto" value="${produto.cod_produto}">
                        <img width="80%" height="80%" src="../../media/svg/delete.png">
                    </button>
                </td>
            </tr>  
        `;
    });

    var view = document.querySelectorAll('.visualizarProduto');
    
    view.forEach(button => {
        button.addEventListener('click', () => {
            exibirInfoProdutos(button.value);
        });
    })
}