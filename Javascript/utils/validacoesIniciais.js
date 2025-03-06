export const validacaoInicial = () => {
    var body = `{
        "produto": [],
        "pedido": [],
        "assistencia": [],
        "entrega": []
    }
    `;
    let dadosStorage = JSON.parse(localStorage.getItem('data'));
    if(!dadosStorage)
        localStorage.setItem('data', body);
}