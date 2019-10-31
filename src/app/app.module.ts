import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProteinWheyComponent } from './protein-whey/protein-whey.component';
import { FruitWheyComponent } from './fruit-whey/fruit-whey.component';
import { MainComponent } from './main/main.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceService } from './service.service';
import { BasketComponent } from './basket/basket.component';
@NgModule({
  declarations: [
    AppComponent,
    ProteinWheyComponent,
    FruitWheyComponent,
    MainComponent,
    ConstructorComponent,
    ContactComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
