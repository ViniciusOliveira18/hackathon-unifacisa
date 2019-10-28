import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarCategoriaComponent } from './components/pesquisar-categoria/pesquisar-categoria.component';
import { ManterCategoriaComponent } from './components/manter-categoria/manter-categoria.component';

const routes: Routes = [
  {
    path:'',
    component:PesquisarCategoriaComponent
  },
  {
    path:'cadastrar',
    component:ManterCategoriaComponent
  },
  {
    path:'editar/:id',
    component:ManterCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriasRoutingModule { }
