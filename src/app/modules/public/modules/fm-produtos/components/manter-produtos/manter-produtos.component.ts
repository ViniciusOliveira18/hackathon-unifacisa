import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutosModel } from '../../models/produto.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../../../fm-categorias/services/categorias.service';
import { CategoriaModel } from '../../../fm-categorias/models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-manter-produtos',
    templateUrl: './manter-produtos.component.html',
    styleUrls: ['./manter-produtos.component.css']
})

export class ManterProdutosComponent implements OnInit {
    cadastroForm: FormGroup;

    produtos: ProdutosModel[] = [];
    categorias: CategoriaModel[] = [];
    titulo: string;
    idProduto: number;



    constructor(
        private fb: FormBuilder,
        private categoriasService: CategoriasService,
        private produtosService: ProdutosService, private activatedRoute: ActivatedRoute,
        private _location: Location) { }

    ngOnInit() {
        this.criarCadastroForm();
        this.getCategorias();
        this.idProduto = this.activatedRoute.snapshot.params['id'];
        this.titulo = this.idProduto ? "Atualizar Produto" : "Cadastrar Produto";

        if (this.idProduto) {
            this.consultarProduto(this.idProduto);
        }
    }

    consultarProduto(idProduto: number) {
        this.produtosService.getProdutoById(idProduto).subscribe(resposta => {
            this.cadastroForm.patchValue(resposta);
        });
    }

    criarCadastroForm() {
        this.cadastroForm = this.fb.group({
            nome: ['', Validators.required],
            desc: ['', Validators.required],
            categoriasId: ['', Validators.required],
            valor: ['', Validators.required]
        });
    }

    salvarProduto() {
        let produto = new ProdutosModel();
        produto = this.cadastroForm.getRawValue();

        if (this.idProduto) {
            this.atualizarProduto(produto, this.idProduto);
        }
        else {
            this.produtosService.cadastrarProduto(produto).subscribe(() => {
                this.ngOnInit();
            });
        };

    }

    getCategorias() {
        this.categoriasService.getCategorias().subscribe(listaCategorias => {
            this.categorias = listaCategorias;
        })
    }

    atualizarProduto(modelo: ProdutosModel, id: number) {
        this.produtosService.atualizarProduto(modelo, id).subscribe(() => {
            this.cancelar();
        });
    }

    cancelar() {
        this._location.back();
    }
}