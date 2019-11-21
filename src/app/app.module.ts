import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { RewardComponent } from './reward/reward.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AllItemsComponent,
    RewardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
