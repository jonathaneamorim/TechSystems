// Criada a classe pedido que poderá ser exportada para outros arquivos em modulo. Ela utiliza o 'export'.

export class Pedido {
    constructor(cod_pedido, nome_cliente, email_cliente, telefone_cliente, data_pedido, observacao) {
        this.cod_pedido = cod_pedido;
        this.nome_cliente = nome_cliente;
        this.email_cliente = email_cliente;
        this.telefone_cliente = telefone_cliente;
        this.data_pedido = data_pedido;
        this.observacao = observacao;
    }
}