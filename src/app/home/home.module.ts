import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    
  ],
  declarations: [HomePage, ModalComponent]
})
export class HomePageModule {}
