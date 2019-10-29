import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias():Observable<CategoriaModel[]>{
   return this.http.get<CategoriaModel[]>(`http://localhost:3000/categorias`)
  }

  getCategoriaById(idCategoria : number):Observable<CategoriaModel>{
    return this.http.get<CategoriaModel>(`${'http://localhost:3000/categorias'}/${idCategoria}`)
   }


  cadastrarCategoria(modelo: CategoriaModel):Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>(`http://localhost:3000/categorias`,modelo)
  }

  atualizarCategoria(modelo: CategoriaModel, idCategoria: number): Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>(`${'http://localhost:3000/categorias'}/${idCategoria}`,modelo)
  }

  deletarCategoria(idCategoria: number):Observable<CategoriaModel>{
    return this.http.delete<CategoriaModel>(`${'http://localhost:3000/categorias'}/${idCategoria}`)
  }

}
