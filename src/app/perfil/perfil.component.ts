import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

universidade = 'CEULP/ULBRA'
curso = 'Ciência da Computação'

listaDeDiciplinas = [
  {periodo: 1, nome: ' - Algoritmo I'},
  {periodo: 2, nome: ' - Algoritmo II'},
  {periodo: 3, nome: ' - LPOO'},
  {periodo: 4, nome: ' - LPC'},
  {periodo: 5, nome: ' - LPWEB'},
]

ondeTrabalha = 'desempregada'
cargo = 'não tem'


  constructor() { }

  ngOnInit() {
  }

}
