import { Produto } from "../Entities/produto.js";
import { gerarCodigo } from "./geradores.js";

export function salvarProduto() {
    // Capturar campos da tela de produtos
    var campoNomeProduto = document.querySelector('#nomeProduto').value;
    var campoPrecoProduto = document.querySelector('#precoProduto').value;
    var campoQuantidadeProduto = document.querySelector('#quantidadeProduto').value;
    var campoModeloProduto = document.querySelector('#modeloProduto').value;
    var campoMarcaProduto = document.querySelector('#marcaProduto').value;
    var campoCodigoProduto = document.querySelector('#codigoProduto').value;
    var campoGarantiaProduto = document.querySelector('#garantiaProduto').value;
    var campoDescricaoProduto = document.querySelector('#descricaoProduto').value;
    var campoInformacoesAdicionaisProduto = document.querySelector('#infoAdicionaisProduto').value;

    try {

        var data = window.localStorage.getItem('data');
        data = JSON.parse(data);

        if(campoCodigoProduto === '') {
            campoCodigoProduto = gerarCodigo();
        }
        var novoProduto = new Produto(campoCodigoProduto, campoNomeProduto, campoDescricaoProduto, campoQuantidadeProduto, parseFloat(campoPrecoProduto), campoMarcaProduto, campoModeloProduto, parseInt(campoGarantiaProduto), campoInformacoesAdicionaisProduto);
        
        // console.log(novoProduto);

        novoProduto = JSON.stringify(novoProduto);

        // console.log(novoProduto);

        data.produtos += novoProduto;

        window.localStorage.setItem('data', JSON.stringify(data));

        // console.log('inserido!')

    } catch(e) {
        console.log(e);
    }
}