import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-manter-categoria',
  templateUrl: './manter-categoria.component.html',
  styleUrls: ['./manter-categoria.component.css']
})
export class ManterCategoriaComponent implements OnInit {
  // id: number
  constructor() { }

  ngOnInit() {
    // this.id  = this.snapShot.params[0].id private snapShot:ActivatedRouteSnapshot
  }

}
