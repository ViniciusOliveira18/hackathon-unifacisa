import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriasRoutingModule } from '../fm-categorias/fm-categorias-routing.module';
import { PesquisarCategoriaComponent } from './components/pesquisar-categoria/pesquisar-categoria.component';
import { ManterCategoriaComponent } from './components/manter-categoria/manter-categoria.component';
import { CategoriasService } from './services/categorias.service';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PesquisarCategoriaComponent , ManterCategoriaComponent],
  imports: [
    CommonModule,
    FmCategoriasRoutingModule,
    SharedComponentsModule,
    RouterModule
  ],
  providers:[CategoriasService]
})
export class FmCategoriasModule { }
