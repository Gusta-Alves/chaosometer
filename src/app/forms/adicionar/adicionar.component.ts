import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { ITabela } from 'src/app/home/interfaces/ITabela';
import { LocalStorageUtils } from 'src/app/utils/localStorage';
import { IIncidentes } from '../interfaces/IIncidentes';
import { PhotoService } from '../../services/photo.service';
import { IPhoto } from '../interfaces/IPhoto';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent implements OnInit, ViewWillEnter {

  public cadastro: FormGroup;
  public incidentes: IIncidentes[] = [{id: 0, incidente: 'Poluição do ar'}, {id: 1, incidente: 'Transito'}, {id: 2, incidente: 'Acidente'}, {id: 3, incidente: 'Transporte Público'}, {id: 4, incidente: 'Alagamento'}, {id: 5, incidente: 'Vazamento'}, {id: 6, incidente: 'Invasão'}, {id: 7, incidente: 'Desmatamento'}, {id: 8, incidente: 'Despejo de lixo'}, {id: 9, incidente: 'Queimada'}];
  public localStorageUtils = new LocalStorageUtils();
  public editavel: boolean = false;
  public id: number = 0;
  public photo: IPhoto = { filepath: '', webviewPath: '' };

  constructor(private _form_builder: FormBuilder,
              private _nav_controller: NavController,
              public photoService: PhotoService) { }

  ionViewWillEnter(): void {
    this.editavel = false;
    this.id = 0;
    this.checar_editavel();
  }

  ngOnInit() {
    this.cadastro = this._form_builder.group({
      incidente: [null, Validators.required],
      status: [1, Validators.required],
      date: [null, Validators.required],
      local: [null, Validators.required],
      imagem: [null]
    })
  }

  async checar_editavel(){
    const valor: ITabela = await this.localStorageUtils.obterIncidenteEditavel();
    if(valor){
      this.cadastro.patchValue({
        incidente: valor.incidente,
        status: valor.status,
        date: valor.date,
        local: valor.local,
        imagem: valor.imagem
      });
      if (valor.imagem) this.photo = {filepath: '', webviewPath: valor.imagem}
      else this.photo = null;
      this.editavel = true;
      this.id = valor.id;
    }
  }

  async onSubmit(){
    if(!this.cadastro.valid) return;
    const incidente: ITabela = Object.assign({}, this.cadastro.value);
    if(!this.editavel){
      await this.localStorageUtils.criarIncidente(incidente)
    } 
    else{
      const incidentes = await this.localStorageUtils.obterIncidentes();
      const index = incidentes.findIndex(inc => inc.id === this.id);
      await this.localStorageUtils.atualizarIncidente(incidente, index);
    }
    this._nav_controller.back();
  }

  cancel(){
    this._nav_controller.back();
  }

  async addPhotoToGallery() {
    this.photo = await this.photoService.addNewToGallery();
    this.cadastro.patchValue({
      imagem: this.photo.webviewPath
    })
  }

}
