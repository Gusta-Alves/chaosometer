import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITabela } from '../interfaces/ITabela';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {

  @Input() item: ITabela;

  constructor(private _modal_controller: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this._modal_controller.dismiss();
  }
}
