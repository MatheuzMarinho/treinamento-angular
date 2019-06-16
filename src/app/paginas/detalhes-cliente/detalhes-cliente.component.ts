import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/ClienteService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {
  formCliente: FormGroup;
  cliente:Cliente = new Cliente()

  constructor(private formBuilder: FormBuilder, private clienteService:ClienteService,private route: ActivatedRoute ) {
    this.createForm(this.cliente);
   }
 
  ngOnInit() {
    this.clienteService.getClienteByNome(this.route.snapshot.paramMap.get("nome")).subscribe(
      (data:Cliente)=>{
        console.log("OK")
        console.log(data)
        this.cliente = data
        this.createForm(this.cliente);
      },
      (error:HttpErrorResponse)=>{
        console.log("erro")
        console.log(error)
        if(error.status == 403){
          alert(error.error);
        }else{
          alert("Erro interno")
        }
      }
    )
  }
 
  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome, Validators.required],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
    this.clienteService.updateCliente(this.formCliente.value).subscribe(
      data=>{
        console.log("OK")
        alert("Cliente Alterado com sucesso!")
      },
      (error:HttpErrorResponse)=>{
        console.log("erro")
        console.log(error)
        if(error.status == 403){
          alert(error.error);
        }else{
          alert("Erro interno")
        }
      }
    )
  }


}
