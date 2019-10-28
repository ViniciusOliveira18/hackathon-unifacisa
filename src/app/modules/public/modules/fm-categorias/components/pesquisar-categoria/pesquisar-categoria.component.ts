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
    this.categoriasService.getCategoria().subscribe(listaCategorias => {
      this.categorias = listaCategorias
    })
  }


}
