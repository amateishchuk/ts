import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WeatherComponent } from "./weather/weather.component";
import { WeatherStartComponent } from "./weather/weather-start/weather-start.component";
import { WeatherDetailComponent } from "./weather/weather-detail/weather-detail.component";
import { CityListComponent } from "./city-list/city-list.component";
import { HistoryComponent } from "./history/history.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'weather', component: WeatherComponent, children: [
        { path: '', component: WeatherStartComponent },
        { path: ':city', component: WeatherDetailComponent },
        { path: ':city/:qtyDays', component: WeatherDetailComponent }
    ]},
    { path: 'cities', component: CityListComponent },
    { path: 'history', component: HistoryComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}