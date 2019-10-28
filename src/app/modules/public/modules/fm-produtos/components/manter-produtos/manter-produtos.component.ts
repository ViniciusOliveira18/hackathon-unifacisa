import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Router, RouterLinkActive, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-manter-produtos',
  templateUrl: './manter-produtos.component.html',
  styleUrls: ['./manter-produtos.component.css']
})
export class ManterProdutosComponent implements OnInit {
 id:number
  constructor(private router:Router) { }

  ngOnInit() {

    // this.router.url.params.subscribe(res =>{this.id = res})
  }


}
