import { Component } from '@angular/core';

export interface ITabela {
  date: string,
  incidente: string
}

const ELEMENT_DATA: ITabela[] = [
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
  {date: '10/12/21', incidente: 'acidente'},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  displayedColumns: string[] = ['info', 'date', 'incidente', 'edit', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor() {}

}
