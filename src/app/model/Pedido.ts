import { IEntrega } from "./Entrega";

export class Pedido{  


    valorTotal(pedido: IPedido){
        return pedido.valor + pedido.valor*8/100;            
    }

    valorComEntrega(pedido: IPedido, entrega: IEntrega){
        if(entrega.tarifado == true){
            return pedido.valor + pedido.valor*15/100;
        } else {
            return pedido.valor
        }
    }
}


export interface IPedido{
    numero: number,
    valor: number,
    desconto: number,
    produtos:Array<any>,
    
 
}