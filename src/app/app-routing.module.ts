import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormadepagamentoComponent } from './formadepagamento/formadepagamento.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path:'cliente', component:ClienteComponent},
  {path:'produto', component:ProdutoComponent},
  {path:'pedido', component:PedidoComponent},
  {path:'fornecedor', component:FornecedorComponent},  
  {path: 'pagamento', component:FormadepagamentoComponent},
  { path: '', redirectTo: '/cliente', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
