import {Component, OnInit} from '@angular/core';
import {ProdutosService} from '../../services/produtos.service';
import { ProdutosModel } from '../../models/produto.model';


@Component({
    selector:'app-pesquisar-produtos',
    templateUrl: './pesquisar-produtos.component.html',
    styleUrls:['./pesquisar-produtos.component.css']
})

export class PesquisarProdutosComponent implements OnInit{

    produtos: ProdutosModel[] = [];

    constructor(private produtoService: ProdutosService){ }

    ngOnInit(){
        this.produtoService.getProdutos().subscribe(listaProdutos => {
            this.produtos = listaProdutos
        })
    }

    delete(produto : ProdutosModel){
        this.produtoService.delete(produto.id).subscribe(produto => console.log('removido'))
    }

}