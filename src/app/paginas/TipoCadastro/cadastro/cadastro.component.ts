import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TipoCadastroService } from 'src/app/service/TipoCadastro';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private tipoCadastroService:TipoCadastroService) { }
 
  ngOnInit() {
    this.createForm();
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      fisica: this.formBuilder.group({
        pai:[0],
        mae:[0]
      })
    })
  }


  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.form.value);
    this.tipoCadastroService.postCliente(this.form.value).subscribe(
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
