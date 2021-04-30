import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
