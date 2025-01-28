// Criada a classe entrega que poderá ser exportada para outros arquivos em modulo. Ela utiliza o 'export'.

export class Entrega {
    constructor(id, codigo_pedido, data_entrega, valor_entrega, endereco) {
        this.id = id;
        this.codigo_pedido = codigo_pedido;
        this.data_entrega = data_entrega;
        this.valor_entrega = valor_entrega;
        this.endereco = endereco;
    }
}