import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CategoriaModel } from '../../models/categoria.model';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manter-categoria',
  templateUrl: './manter-categoria.component.html',
  styleUrls: ['./manter-categoria.component.css']
})
export class ManterCategoriaComponent implements OnInit {
  cadastroForm: FormGroup
  titulo: string;
  idCategoria: number;
  constructor(private fb: FormBuilder, private _location: Location, private categoriasService: CategoriasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.criarCadastroForm()
    this.idCategoria = this.activatedRoute.snapshot.params['id'];
    this.titulo = this.idCategoria ? "Atualizar Categoria" : "Cadastrar Categoria";

    if (this.idCategoria) {
      this.consultarProduto(this.idCategoria);
    }
  }

  consultarProduto(idCadastro: number) {
    this.categoriasService.getCategoriaById(idCadastro).subscribe(resposta => {
      this.cadastroForm.patchValue(resposta);
    });
  }
  criarCadastroForm() {
    this.cadastroForm = this.fb.group({
      descricao: ['', Validators.required]
    })
  }


  salvarCategoria() {
    let categoria = new CategoriaModel();
    categoria = this.cadastroForm.getRawValue();

    if (this.idCategoria) {
      this.atualizarCategoria(categoria, this.idCategoria);
    }
    else {
      this.categoriasService.cadastrarCategoria(categoria).subscribe(() => {
        this.ngOnInit();
      });
    };
  }

  atualizarCategoria(modelo: CategoriaModel, id: number) {
    this.categoriasService.atualizarCategoria(modelo, id).subscribe(() => {
      this.cancelar();
    });
  }

  cancelar() {
    this._location.back();
  }

  salvarProduto() {
    let produto = new CategoriaModel();
    produto = this.cadastroForm.getRawValue();

    if (this.idCategoria) {
      this.atualizarCategoria(produto, this.idCategoria);
    }
    else {
      this.categoriasService.cadastrarCategoria(produto).subscribe(() => {
        this.ngOnInit();
      });
    };

  }

}
