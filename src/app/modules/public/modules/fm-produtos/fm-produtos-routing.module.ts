import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { ManterProdutosComponent } from './components/manter-produtos/manter-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarProdutosComponent,
    pathMatch: 'full'
  },
  {
    path: 'cadastrar', component: ManterProdutosComponent
  },
  {
    path: 'editar/:id', component: ManterProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmProdutosRoutingModule { }
