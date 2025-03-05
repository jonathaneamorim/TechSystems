// Seção de importações de arquivos
import { renderGridProducts } from './utils/inserirDadosGrids.js';
import { inserirNovoProduto, salvarEdicaoProduto } from './utils/manipularProdutos.js';

const botaoSalvarProdutos = document.querySelector("#salvarDadosProdutos");
const botaoSalvarModalProdutos = document.querySelector('#botaoSalvarModalProdutos');

document.addEventListener('DOMContentLoaded', () => {
    renderGridProducts();
})

botaoSalvarProdutos.addEventListener('click', () => {
    inserirNovoProduto();
})

botaoSalvarModalProdutos.addEventListener('click', () => {
    salvarEdicaoProduto();
})