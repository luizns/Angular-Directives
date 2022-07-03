import {Component, OnInit} from '@angular/core';
import {Colaborador} from "../models/colaborador.model";

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  title = 'Lista de Colaboradores';

  exibeColaborador = true;

  colaboradores: Array<Colaborador> = [
    {
      id: 7,
      nome: 'Nathan Carlos - Angular',
      salario: 7500,
      cargo: 'Dev Pl',
      homeOffice: true
    },
    {
      id: 8,
      nome: 'Alan Jhonnes - Typescript',
      salario: 7500,
      cargo: 'Dev Pl',
      homeOffice: true
    },
    {
      id: 9,
      nome: 'Luiz - Angular | Typescript',
      salario: 5000,
      cargo: 'Dev Jr',
      homeOffice: false
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  exibeColaboradorSimNao() {
    this.exibeColaborador = !this.exibeColaborador;
  }
}
