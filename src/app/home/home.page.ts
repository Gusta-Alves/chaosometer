import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalController, NavController } from '@ionic/angular';
import { ExcluirComponent } from './dialog/excluir/excluir.component';
import { ITabela } from './interfaces/ITabela';
import { ModalComponent } from './modal/modal.component';

const ELEMENT_DATA: ITabela[] = [
  {date: '10/12/21', incidente: 'Poluição do ar', local: 'rua teste', status: 1, id: 0},
  {date: '10/12/21', incidente: 'Enchente no rio' , local: 'rua teste', status: 1, id: 1},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 2},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 3},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 4},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 5},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 6},
  {date: '10/12/21', incidente: 'acidente', local: 'rua teste', status: 1, id: 7},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['info', 'date', 'incidente', 'edit', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor(private _nav_controller: NavController,
              public modalController: ModalController,
              private dialog: MatDialog) {}

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

  excluirElemento(item: ITabela): void{
    const dialogRef = this.dialog.open(ExcluirComponent, { data: item });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const index = this.dataSource.findIndex(tab => tab.id === item.id);        
        this.dataSource.splice(index, 1);  
        this.table.renderRows();
      }
      // if(result) this.deleteByID(id);
    });    
  }

}
