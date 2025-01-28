// Criada a classe assistencia que poderá ser exportada para outros arquivos em modulo. Ela utiliza o 'export'.

export class Assistencia {
    constructor(cod_assistencia, nome_cliente, descricao, data_inicio, data_fim, valor_orcamento, telefone_cliente, email_cliente, garantia_dias) {
        this.cod_assistencia = cod_assistencia;
        this.nome_cliente = nome_cliente; 
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.valor_orcamento = valor_orcamento;
        this.telefone_cliente = telefone_cliente;
        this.email_cliente = email_cliente; 
        this.garantia_dias = garantia_dias;
    }
}