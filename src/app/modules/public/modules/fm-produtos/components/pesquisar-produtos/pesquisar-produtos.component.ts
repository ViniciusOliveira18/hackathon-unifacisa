import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../models/produto.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
    selector: 'app-pesquisar-produtos',
    templateUrl: './pesquisar-produtos.component.html',
    styleUrls: ['./pesquisar-produtos.component.css']
})
export class PesquisarProdutosComponent implements OnInit {

    produtos: ProdutosModel[] = []
    constructor(private produtoService: ProdutosService) { }

    ngOnInit() {
        this.produtoService.getProdutos().subscribe(listaProdutos => {
            this.produtos = listaProdutos
        });
    }

    deletar(idProduto: number) {
        this.produtoService.deletarProduto(idProduto).subscribe(() => {
            this.ngOnInit();
        })

    }



}