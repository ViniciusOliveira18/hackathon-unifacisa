import { NgModule } from '@angular/core';
import { ManterProdutosComponent } from './components/manter-produtos/manter-produtos.component';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './services/produtos.service';
import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { PublicModule } from '../../public.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriasService } from '../fm-categorias/services/categorias.service';

@NgModule(
    {
        declarations: [
            ManterProdutosComponent, PesquisarProdutosComponent
        ],
        imports: [
            CommonModule,
            FmProdutosRoutingModule,
            SharedComponentsModule,
            PublicModule,
            FormsModule,
            ReactiveFormsModule
            
        ],
        exports: [],
        providers: [ProdutosService,CategoriasService]
    }
)
export class FmProdutosModule {

}