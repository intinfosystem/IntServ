import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDashboardComponent } from "../dashboard/service.dashboard.component";
import { SplashComponent } from "../splash/splash.component";
import { FruitBasketComponent } from "../fruitbasket/fruit-basket.component";

const routes: Routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: 'dashboard', component: ServiceDashboardComponent },
    { path: 'splash', component: SplashComponent },
    { path: 'fruitbasket', component: FruitBasketComponent}
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}