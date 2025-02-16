// Seção de importações de arquivos
import { Produto } from './Entities/produto.js';
import { Assistencia } from './Entities/assistencia.js';
import { Pedido } from './Entities/pedido.js';
import { Entrega } from './Entities/entrega.js';
import { verificaDados } from './utils/verificaDados.js';
import { salvarProduto } from './utils/saveitens.js';

// Teste de classes
const produto = new Produto('323114', 'Placa de video', 'Roda varias coisas', '356,29', 'Ryzen', 'rtx-21', 12, 'nada a declarar');
const assistencia = new Assistencia();
const pedido = new Pedido();
const entrega = new Entrega();

document.addEventListener('DOMContentLoaded', () => {
    verificaDados();
})

// Botao para salvar produtos
var botaoSalvarProduto = document.querySelector('#botaoSalvarProduto');

botaoSalvarProduto.addEventListener('click', () => {
    salvarProduto();
})