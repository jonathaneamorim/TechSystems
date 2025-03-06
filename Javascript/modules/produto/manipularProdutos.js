import { Produto } from "../../Entities/produto.js";
import { gerarCodigoProduto } from "./gerarCodigo.js";
import { renderGridProducts } from "./inserirDadosGrids.js";

const espacoInfoProduto = document.querySelector('#dataInfoProduto');
const tituloModal = document.querySelector('#tituloVisualizacaoProduto');
const botaoSalvar = document.getElementById('botaoSalvarModalProdutos');

const modalProduto = new bootstrap.Modal(document.getElementById('modalProduto'));
const modalNovoProduto = new bootstrap.Modal(document.getElementById('modalNovoProduto'));

const fecharModais = () => {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    modalNovoProduto.hide();
    modalProduto.hide();
}

// Função criada para salvar um produto na base de dados
export const inserirNovoProduto = () => {
    try {
        let dadosStorage = JSON.parse(localStorage.getItem('data'));
        let listaProdutos = dadosStorage.produto;
        let listaDeCodigos = listaProdutos.map(n => n.cod_produto);

        const campos = {
            nome: document.querySelector("#campoNomeProduto").value,
            preco: document.querySelector("#campoPrecoProduto").value,
            marca: document.querySelector("#campoMarcaProduto").value,
            quantidade: document.querySelector("#campoQuantidadeProduto").value,
            modelo: document.querySelector("#campoModeloProduto").value,
            codigo: document.querySelector("#campoCodigoProduto").value,
            garantia: document.querySelector("#campoGarantiaProduto").value,
            descricao: document.querySelector("#campoDescricaoProduto").value,
            info: document.querySelector("#campoInfoProduto").value
        }

        if(campos.codigo === '') {
            campos.codigo = gerarCodigoProduto();
        } else if(listaDeCodigos.includes(campos.codigo)) {
            alert("Este código já está sendo utilizado, por favor utilize outro código!");
            document.querySelector("#campoCodigoProduto").value = '';
            return;
        }

        let produto = new Produto(
            campos.codigo, 
            campos.nome, 
            campos.descricao, 
            campos.quantidade, 
            campos.preco, 
            campos.marca, 
            campos.modelo, 
            campos.garantia, 
            campos.info
        );

        dadosStorage.produto.push(produto);

        localStorage.setItem('data', JSON.stringify(dadosStorage));

        renderGridProducts();

        limparModalNovoProduto();

        fecharModais();
    } catch(e) {
        console.log('Error: ', e);
    }
}

// Função criada para inserir as informações na modal de ações na tela de produtos.
// Para identificar qual produto será exibido a função recebe o código do produto.
export const exibirInfoProdutos = (cod_produto) => {
    try {

        let produto = findProduct(cod_produto);

        // Aplica o título e o conteudo da modal
        tituloModal.innerText = "Visualizar informações do produto";

        renderForm(produto, true);
        
        // Esconde o botão de Salvar e exibe a modal
        botaoSalvar.style.display = 'none';
        modalProduto.show();

    } catch(e) {
        console.log('Erro ao exibir informações do produto: ', e);
    }
}

// Função criada para editar as informações de um produto na modal de ações na tela de produtos.
// Para identificar qual produto será exibido a função recebe o código do produto.
export const editarProduto = (cod_produto) => {
    try {
        let produto = findProduct(cod_produto);

        // Define os valores da modal com as informações necessárias
        tituloModal.innerText = "Editar informações do produto";

        renderForm(produto, false);

        // Exibe o botão de Salvar e exibe a modal
        botaoSalvar.style.display = 'inherit';

        modalProduto.show();

    } catch(e) {
        console.log('Erro ao editar produto: ', e);
    }
}

export const excluirProduto = (cod_produto) => {
    try {
    
        let dadosStorage = JSON.parse(localStorage.getItem('data'));

        let listaProdutos = dadosStorage.produto;
        
        let index = listaProdutos.findIndex(n => n.cod_produto = cod_produto);

        listaProdutos.splice(index, 1);

        if(listaProdutos == '' || listaProdutos == null) 
            listaProdutos = [];

        dadosStorage.produto = listaProdutos;

        localStorage.setItem('data', JSON.stringify(dadosStorage));
        
        renderGridProducts();

        alert('Produto excluido com sucesso!');

    } catch(e) {

        console.log('Erro ao excluir produto: ', e);

    }
}

const findProduct = (cod_produto) => {
    try {
        // Capturar a informação atualizada do localstorage
        let listaProdutos = capturarListaProdutos();
    
        // Encontra na lista de produtos o produto selecionado
        let produto = listaProdutos.find(n => n.cod_produto == cod_produto);

        // Verifica se na consulta foi encontrado algum produto, em caso negativo lançará uma nova exceção de produto não encontrado
        if(!produto) throw new Error('Produto não encontrado!');

        return produto;

    } catch (e) {
        console.log("Error: ", e);
    }
}

const limparModalNovoProduto = () => {
    document.querySelector("#campoNomeProduto").value = '';
    document.querySelector("#campoPrecoProduto").value = '';
    document.querySelector("#campoMarcaProduto").value = '';
    document.querySelector("#campoQuantidadeProduto").value = '';
    document.querySelector("#campoModeloProduto").value = '';
    document.querySelector("#campoCodigoProduto").value = '';
    document.querySelector("#campoGarantiaProduto").value = '';
    document.querySelector("#campoDescricaoProduto").value = '';
    document.querySelector("#campoInfoProduto").value = '';
}

export const capturarListaProdutos = () => {
    let dadosStorage = JSON.parse(localStorage.getItem('data'));
    let listaProdutos = dadosStorage.produto;
    return listaProdutos;
}

export const salvarEdicaoProduto = () => {
    try {
        // Capturar a informação atualizada do localstorage
        let dadosStorage = JSON.parse(localStorage.getItem('data'));
        let listaProdutos = dadosStorage.produto;

        const campos = {
            nome: document.querySelector("#campoNomeProdutoEditar").value,
            preco: document.querySelector("#campoPrecoProdutoEditar").value,
            marca: document.querySelector("#campoMarcaProdutoEditar").value,
            quantidade: document.querySelector("#campoQuantidadeProdutoEditar").value,
            modelo: document.querySelector("#campoModeloProdutoEditar").value,
            codigo: document.querySelector("#campoCodigoProdutoEditar").value,
            garantia: document.querySelector("#campoGarantiaProdutoEditar").value,
            descricao: document.querySelector("#campoDescricaoProdutoEditar").value,
            info: document.querySelector("#campoInfoProdutoEditar").value
        }

        let produtoEditado = new Produto(
            campos.codigo, 
            campos.nome, 
            campos.descricao, 
            campos.quantidade, 
            campos.preco, 
            campos.marca, 
            campos.modelo, 
            campos.garantia, 
            campos.info
        );

        let index = listaProdutos.findIndex(item => item.cod_produto == campos.codigo);

        listaProdutos[index] = produtoEditado;

        localStorage.setItem('data', JSON.stringify(dadosStorage));

        renderGridProducts();

        modalProduto.hide();
    } catch(e) {
        console.log('Erro ao editar produto: ', e);
    }
}

// Arrow Function criada com proposito de renderizar as informações da modal avaliando se as informações são apenas de leitura ou não
// recebe o objeto Produto e um valor true e false que indica se é apenas leitura ou não
const renderForm = (produto, isReadonly) => {
    const readonlyAttr = isReadonly ? 'readonly' : '';
    const text = `
        <div class="col-md-6">
            <label class="form-label">Nome</label>
            <input type="text" class="form-control" id="campoNomeProdutoEditar" value="${produto.nome}" ${readonlyAttr}>
        </div>
        <div class="col-md-3">
            <label class="form-label">Preço</label>
            <input type="text" class="form-control" id="campoPrecoProdutoEditar" value="${produto.preco}" ${readonlyAttr}>
        </div>
        <div class="col-md-3">
            <label class="form-label">Quantidade</label>
            <input type="text" class="form-control" id="campoQuantidadeProdutoEditar" value="${produto.quantidade}" ${readonlyAttr}>
        </div>
        <div class="col-md-6">
            <label class="form-label">Modelo</label>
            <input type="text" class="form-control" id="campoModeloProdutoEditar" value="${produto.modelo}" ${readonlyAttr}>
        </div>
        <div class="col-md-6">
            <label class="form-label">Marca</label>
            <input type="text" class="form-control" id="campoMarcaProdutoEditar" value="${produto.marca}" ${readonlyAttr}>
        </div>
        <div class="col-md-6">
            <label class="form-label">Código do Produto</label>
            <input type="text" class="form-control bg-secondary text-white" id="campoCodigoProdutoEditar" value="${produto.cod_produto}" readonly>
        </div>
        <div class="col-md-6">
            <label class="form-label">Garantia em dias</label>
            <input type="text" class="form-control" id="campoGarantiaProdutoEditar" value="${produto.garantiaDIas}" ${readonlyAttr}>
        </div>
        <div class="col-md-6">
            <label class="form-label">Descrição</label>
            <textarea class="form-control" rows="3" style="resize: none;" id="campoDescricaoProdutoEditar" ${readonlyAttr}>${produto.descricao}</textarea>
        </div>
        <div class="col-md-6">
            <label class="form-label">Informações adicionais</label>
            <textarea class="form-control" style="resize: none;" rows="3" id="campoInfoProdutoEditar" ${readonlyAttr}>${produto.infoAdicionais}</textarea>
        </div>
    `;
    espacoInfoProduto.innerHTML = text;
}