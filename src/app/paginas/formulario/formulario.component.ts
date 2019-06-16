import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/ClienteService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService:ClienteService ) { }
 
  ngOnInit() {
    this.createForm();
  }
 
  createForm() {
    this.formCliente = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['0'],
      genero: [0],
      observacao: [],
      inativo: []
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
    this.clienteService.postCliente(this.formCliente.value).subscribe(
      data=>{
        console.log("OK")
        alert("Cliente Cadastro com Sucesso!")
        this.createForm()
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
