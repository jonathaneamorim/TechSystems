export function inserirPadraoInicial() {
    var body = `{
        "produto": [],
        "pedido": [],
        "assistencia": [],
        "entrega": []
    }
    `;

    localStorage.setItem('data', body);
}

export function salvarProdutoLocalStorage(produto) {
    
} 