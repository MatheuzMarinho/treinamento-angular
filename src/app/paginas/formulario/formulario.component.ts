import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente: FormGroup;
  cliente:Cliente = new Cliente()

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.createForm(this.cliente);
  }
 
  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: ['Matheus', Validators.required],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
  }
}
