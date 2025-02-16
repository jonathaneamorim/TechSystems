export function gerarCodigo() {

    var data = window.localStorage.getItem('data');

    data = JSON.parse(data);

    var listaDeCodigos = [];
    
    console.log(data.produtos);
    // if (Array.isArray(data.produtos)) {
    //     console.log(data.produtos.map(t => t.nome));
    // } else {
    //     console.error('data.produtos não é um array');
    // }
    // data.produtos.forEach((element) => {
    //     listaDeCodigos.push(element.cod_produto)}
    // );

    var novoCodigo = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    if(novoCodigo in listaDeCodigos) {
        gerarCodigo();
    } else {
        return novoCodigo;
    }
}