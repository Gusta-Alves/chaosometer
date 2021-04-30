import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const materiais = [
  MatExpansionModule,
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    materiais
  ],
  exports: [
    materiais
  ]
})
export class MaterialModule {}
