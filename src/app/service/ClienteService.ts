import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root',
  })
  export class ClienteService{
      
      url = "http://localhost:8080/cliente"
      private headers = new HttpHeaders();
      
      constructor(private http: HttpClient){
        
        this.headers = this.headers.append('Content-Type', 'application/json');
      }

    getClientes() {
        return this.http.get<Cliente[]>(this.url)
     }

     getClienteByNome(nome:String) {
      return this.http.get<Cliente>(this.url + '/nome/'+nome)
   }

     postCliente(cliente:Cliente){
       return this.http.post<Cliente>(this.url,JSON.stringify(cliente),{headers: this.headers})
     }

     updateCliente(cliente:Cliente){
      return this.http.put<Cliente>(this.url,JSON.stringify(cliente),{headers: this.headers})
    }
  }