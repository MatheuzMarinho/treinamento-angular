import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoCadastro } from '../models/TipoCadastro';

@Injectable({
    providedIn: 'root',
  })
  export class TipoCadastroService{
      
      url = "http://localhost:8080/tipocadastro"
      private headers = new HttpHeaders();
      
      constructor(private http: HttpClient){
        
        this.headers = this.headers.append('Content-Type', 'application/json');
      }



     postCliente(tipoCadastro:TipoCadastro){
       return this.http.post<TipoCadastro>(this.url,JSON.stringify(tipoCadastro),{headers: this.headers})
     }


  }