import { NgModule } from '@angular/core';
import { ManterProdutosComponent } from './components/manter-produtos/manter-produtos.component';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './services/produtos.service';
import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule(
    {
        declarations: [
            ManterProdutosComponent, PesquisarProdutosComponent
        ],
        imports: [
            CommonModule,
            FmProdutosRoutingModule,
            SharedComponentsModule,
            
        ],
        exports: [],
        providers: [ProdutosService]
    }
)
export class FmProdutosModule {

}