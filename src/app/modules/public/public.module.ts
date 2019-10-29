import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { FmProdutosModule } from './modules/fm-produtos/fm-produtos.module';
import { FmCategoriasModule } from './modules/fm-categorias/fm-categorias.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PublicRoutingModule
  ],
  exports:[]
})
export class PublicModule { }
