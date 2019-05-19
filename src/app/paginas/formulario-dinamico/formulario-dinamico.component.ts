import { Component, OnInit } from '@angular/core';
import { FormDinamico } from 'src/app/models/form-dinamico';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-dinamico',
  templateUrl: './formulario-dinamico.component.html',
  styleUrls: ['./formulario-dinamico.component.css']
})
export class FormularioDinamicoComponent implements OnInit {
  myFormGroup:FormGroup;
  formulario:Array<FormDinamico> = new Array<FormDinamico>()
  public extraList: FormArray;

  constructor(private formBuilder: FormBuilder) { 
    let c1 = new FormDinamico()
    c1.label = "Nome"
    c1.tipo = "input"
    c1.tipoInput = "text"
    let c2 = new FormDinamico()
    c2.label = "Número"
    c2.tipo = "input"
    c2.tipoInput = "number"
    let c3 = new FormDinamico()
    c3.label = "Tipo"
    c3.tipo = "select"
    c3.valores.push("Pessoa Fisica")
    c3.valores.push("Pessoa Juridica")
    c3.valores.push("Pessoas")
    let c4 = new FormDinamico()
    c4.label = "Senha"
    c4.tipo = "input"
    c4.tipoInput = "password"
    this.formulario.push(c1)
    this.formulario.push(c2)
    this.formulario.push(c3)
    this.formulario.push(c4)
  }
  
  ngOnInit() {
    let group={}    
    this.formulario.forEach(input_template=>{
      if(input_template.tipo == 'select'){
      group[input_template.label]=new FormControl(input_template.valores[0]);  
      }else{
        group[input_template.label]=new FormControl('');  
      }
    })
    group['extras'] = this.formBuilder.array([this.createExtras()])
    this.myFormGroup = new FormGroup(group);
    this.extraList = this.myFormGroup.get('extras') as FormArray;
  }


  createExtras(): FormGroup {
    return this.formBuilder.group({
      name: [null],
      value: [null]
    });
  }


  addExtra() {
    this.extraList.push(this.createExtras());
  }

    removeExtra(index) {
      this.extraList.removeAt(index);
    }

  
  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}
