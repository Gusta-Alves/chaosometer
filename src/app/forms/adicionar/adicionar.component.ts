import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IIncidentes } from '../interfaces/IIncidentes';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent implements OnInit {

  public cadastro: FormGroup;
  public incidentes: IIncidentes[] = [{id: 0, nome: 'Poluição do ar'}, {id: 1, nome: 'Transito'}, {id: 2, nome: 'Acidente'}, {id: 3, nome: 'Transporte Público'}, {id: 4, nome: 'Alagamento'}, {id: 5, nome: 'Vazamento'}, {id: 6, nome: 'Invasão'}, {id: 7, nome: 'Desmatamento'}, {id: 8, nome: 'Despejo de lixo'}, {id: 9, nome: 'Queimada'}];
  
  constructor(private _form_builder: FormBuilder,
              private _nav_controller: NavController) { }

  ngOnInit() {
    this.cadastro = this._form_builder.group({
      tipo: [null, Validators.required],
      status: [1, Validators.required],
      date: [null, Validators.required],
      local: [null, Validators.required]
    });
  }

  onSubmit(){

  }

  cancel(){
    this._nav_controller.back();
  }

}
