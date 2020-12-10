import { IProduto } from "./Produto";

export class Estoque{

    removeProduto (produto: IProduto, qtdInicial: number) {    
        var qtdInicial = 50
        var qtd = produto.quantidade;
        return qtdInicial-qtd;     
      
    }
    
}

export interface IEstoque{
    codigo_produto: number,
    nome_produto: string,
    quantidade: number,
}