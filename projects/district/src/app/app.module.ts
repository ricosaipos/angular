import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
