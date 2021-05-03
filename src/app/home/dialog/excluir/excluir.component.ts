import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITabela } from '../../interfaces/ITabela';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
})
export class ExcluirComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITabela) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() { }

}
