import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  teste: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', teste: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', teste: 'H'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', teste: 'H'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', teste: 'H'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', teste: 'H'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', teste: 'H'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', teste: 'H'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', teste: 'H'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', teste: 'H'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', teste: 'H'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', teste: 'H'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', teste: 'H'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', teste: 'H'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', teste: 'H'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', teste: 'H'},
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'teste'];
  dataSource = ELEMENT_DATA;

  constructor() {}

}
