import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutosModel } from '../models/produto.model';


const PRODUTOS = "/produtos"
@Injectable()
export class ProdutosService {
  
  constructor(private http : HttpClient) { }

  getProdutos():Observable<ProdutosModel[]>{
   return this.http.get<ProdutosModel[]>(`http://localhost:3000/produtos`)
  }

  cadastrar(modelo : ProdutosModel):Observable<ProdutosModel[]>{
    return this.http.post<ProdutosModel[]>(`http://localhost:3000/produtos`,modelo)
  }

  atualizar(modelo: ProdutosModel, id: number):Observable<ProdutosModel>{
    return this.http.put<ProdutosModel>(`http://localhost:3000/produtos`+ id,modelo)
  }

  delete(id: number):Observable<ProdutosModel>{
    return this.http.delete<ProdutosModel>(`${'http://localhost:3000/produtos'}/${id}`)

  }
}
