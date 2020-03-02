import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSliderModule} from '@angular/material/slider';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule} from '@angular/common';

const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
