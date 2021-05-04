import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ModalController, NavController, ViewWillEnter } from '@ionic/angular';
import { LocalStorageUtils } from '../utils/localStorage';
import { ExcluirComponent } from './dialog/excluir/excluir.component';
import { ITabela } from './interfaces/ITabela';
import { ModalComponent } from './modal/modal.component';

const ELEMENT_DATA: ITabela[] = [
  {date: '', incidente: '', local: '', status: 0, id: 0},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, ViewWillEnter{

  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['info', 'date', 'incidente', 'edit', 'excluir'];
  dataSource: ITabela[] = ELEMENT_DATA;
  localStorageUtils = new LocalStorageUtils();
  ativos: number = 0;
  inativos: number = 0;

  constructor(private _nav_controller: NavController,
              public modalController: ModalController,
              private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ionViewWillEnter() {
    this.popular_tabela();
    this.localStorageUtils.limparEditavel();
  }

  async popular_tabela(){
    this.dataSource = await this.localStorageUtils.obterIncidentes();   
    if(!this.dataSource) this.dataSource = []; 
    this.table.renderRows();
    if(this.dataSource.length){ 
      this.verificar_ativos();
    }
  }

  verificar_ativos(){
    this.ativos = this.dataSource.filter(inci => inci.status === 1).length;
    this.inativos = this.dataSource.filter(inci => inci.status === 2).length;
  }

  criar_incidente(){
    this._nav_controller.navigateForward(['/forms/adicionar']);
  }

  async editar_incidente(item: ITabela){
    await this.localStorageUtils.salvarIncidenteEditavel(item);
    this._nav_controller.navigateForward(['/forms/adicionar']);
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
        this.localStorageUtils.removerIncidente(item, index); 
        this.verificar_ativos();
        this.table.renderRows();
      }
    });    
  }

}
