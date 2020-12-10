import { Pedido, IPedido } from "./Pedido";
import { IEntrega } from "./Entrega";
import { IProduto } from "./Produto";

//import { Produto, IProduto } from "./Produto";
//import { Cliente, ICliente } from "./Cliente";

var valorTotalPedido: number;
var valorEntrega: number;

var produto1: IProduto = {numero: 1, preco: 5, quantidade: 4 };
var produto2: IProduto = {numero: 2, preco: 10, quantidade: 8 };


var valorTotal = produto1.preco * produto1.quantidade + produto2.preco * produto2.quantidade;

var pedido: IPedido = { numero: 1, valor: valorTotal, desconto: 0, produtos: [produto1, produto2] };
var entrega: IEntrega = { tarifado: true};


valorTotalPedido = new Pedido().valorTotal(pedido);
console.log("Valor total do pedido é de = R$", valorTotalPedido);

valorEntrega = new Pedido().valorComEntrega(pedido, entrega);
console.log("Valor total do pedido com a entrega é de = R$", valorEntrega ); 

if(valorTotalPedido & valorEntrega){
    console.log("Pedido Realizado com Sucesso!"); 
}

