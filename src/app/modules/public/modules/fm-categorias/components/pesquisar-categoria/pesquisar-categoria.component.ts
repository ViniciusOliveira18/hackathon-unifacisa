import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../models/categoria.model';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-pesquisar-categoria',
  templateUrl: './pesquisar-categoria.component.html',
  styleUrls: ['./pesquisar-categoria.component.css']
})
export class PesquisarCategoriaComponent implements OnInit {

    categorias : CategoriaModel[] = []

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(listaCategorias => {
      this.categorias = listaCategorias
    })
  }

  deletar(idCategoria: number) {
    this.categoriasService.deletarCategoria(idCategoria).subscribe(() => {
        this.ngOnInit();
    })

}


}
