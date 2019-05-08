import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personagem = 'Groot';
  imagem = 'https://cdn.vox-cdn.com/thumbor/xddVMltvqjB3PEgF4OnOQifZvZs=/0x0:1200x696/1200x800/filters:focal(535x82:727x274)/cdn.vox-cdn.com/uploads/chorus_image/image/58843699/baby-groot-guardians.0.0.jpg'
  meuNome = "Matheus Marinho"
  nomesAmigos = ['Senhor das Estrelas','Gamora','Rocket','Nebulosa']
  imagemVisivel:boolean = true;
  
  getFilme(){
    return "Guardiões da Galáxia Vol.2"
  }
  getPoder(poder){
    alert(poder)
  }
  
  aparecerImagem(){
    this.imagemVisivel = !this.imagemVisivel
  }



  constructor() { }

  ngOnInit() {
  }

}
