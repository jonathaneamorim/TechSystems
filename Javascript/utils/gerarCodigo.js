export const gerarCodigoProduto = () => {
    let dadosStorage = JSON.parse(localStorage.getItem('data'));
    let listaProdutos = dadosStorage.produto;
    let listaDeCodigos = listaProdutos.map(n => n.cod_produto);

    let novoCodigo = Math.floor(Math.random() * (999999 - 600000) + 600000);

    if(listaDeCodigos.includes(novoCodigo)) 
        gerarCodigoProduto();

    return novoCodigo;
}