import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceDashboardComponent } from "../dashboard/service.dashboard.component";
import { SplashComponent } from "../splash/splash.component";
import { FruitBasketComponent } from "../fruitbasket/fruit-basket.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ServiceDashboardComponent,
    SplashComponent,
    FruitBasketComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
