// Criada a classe produto que poderá ser exportada para outros arquivos em modulo. Ela utiliza o 'export'.

export class Produto {
    constructor(cod_produto, nome, descricao, quantidade, preco, marca, modelo, garantia_dias, info_adicionais) {
        this.cod_produto = cod_produto;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
        this.marca = marca;
        this.modelo = modelo;
        this.garantiaDIas = garantia_dias;
        this.infoAdicionais = info_adicionais;
    }
}