import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsPageRoutingModule } from './form-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AdicionarComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FormsPageRoutingModule,
  ],
})
export class FormsPageModule { }
