import { validacaoInicial } from "../../utils/validacoesIniciais.js";
import { renderGridProducts } from "./inserirDadosGrids.js";
import { inserirNovoProduto, salvarEdicaoProduto } from "./manipularProdutos.js";

const botaoSalvarProdutos = document.getElementById('salvarDadosProdutos');

const botaoSalvarModalProdutos = document.querySelector('#botaoSalvarModalProdutos');

document.addEventListener('DOMContentLoaded', () => {
    validacaoInicial();
    renderGridProducts();
})

botaoSalvarProdutos.addEventListener('click', () => {
    inserirNovoProduto();
})

botaoSalvarModalProdutos.addEventListener('click', () => {
    salvarEdicaoProduto();
})