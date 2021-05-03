import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ITabela } from './interfaces/ITabela';
import { ModalComponent } from './modal/modal.component';

const ELEMENT_DATA: ITabela[] = [
  {date: '10/12/21', incidente: 'Poluição do ar', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'Enchente no rio' , local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  displayedColumns: string[] = ['info', 'date', 'incidente', 'edit', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(private _nav_controller: NavController,
              public modalController: ModalController) {}

  criar_incidente(){
    this._nav_controller.navigateForward(['/forms/adicionar'])
  }

  async modalInfo(item: ITabela) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {item: item},      
    });
    return await modal.present();
  }

}
