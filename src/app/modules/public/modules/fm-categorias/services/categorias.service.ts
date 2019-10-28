import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../models/categoria.model';

@Injectable()
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategoria():Observable<CategoriaModel[]>{
   return this.http.get<CategoriaModel[]>(`http://localhost:3000/categorias`)
  }

  cadastrar(modelo: CategoriaModel):Observable<CategoriaModel[]>{
    return this.http.post<CategoriaModel[]>(`http://localhost:3000/cadegorias`,modelo)
  }

  updateCategoria(modelo: CategoriaModel, id: number): Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>(`http://localhost:3000/categorias` + id, modelo)
  }

  deleteCategoria(id: number):Observable<CategoriaModel>{
    return this.http.delete<CategoriaModel>(`http://localhost:3000/categorias` + id)
  }

}
