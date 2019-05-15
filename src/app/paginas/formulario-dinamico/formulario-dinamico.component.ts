import { Component, OnInit } from '@angular/core';
import { ClienteDinamico } from 'src/app/models/cliente-dinamico';
import { DeprecatedI18NPipesModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-dinamico',
  templateUrl: './formulario-dinamico.component.html',
  styleUrls: ['./formulario-dinamico.component.css']
})
export class FormularioDinamicoComponent implements OnInit {
  myFormGroup:FormGroup;
  formulario:Array<ClienteDinamico> = new Array<ClienteDinamico>()

  constructor() { 
    let c1 = new ClienteDinamico()
    c1.label = "Nome"
    c1.tipo = "text"
    let c2 = new ClienteDinamico()
    c2.label = "Observação"
    c2.tipo = "text"
    let c3 = new ClienteDinamico()
    c3.label = "Tipo"
    c3.tipo = "select"
    c3.valores.push("Pessoa Fisica")
    c3.valores.push("Pessoa Juridica")
    this.formulario.push(c1)
    this.formulario.push(c2)
    this.formulario.push(c3)
  }
  
  ngOnInit() {
    let group={}    
    this.formulario.forEach(input_template=>{
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }
  
  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}
