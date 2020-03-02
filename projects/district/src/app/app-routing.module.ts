import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
