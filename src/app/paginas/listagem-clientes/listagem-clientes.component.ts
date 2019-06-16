import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/ClienteService';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {
  clientes:Array<Cliente> = new Array();
  constructor(private clienteService:ClienteService) { 
  clienteService.getClientes().subscribe(
      data=>{
        this.clientes = data
      }
    )
  }

  ngOnInit() {
  }

}
