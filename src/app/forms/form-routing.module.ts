import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'adicionar', component: AdicionarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsPageRoutingModule {}
