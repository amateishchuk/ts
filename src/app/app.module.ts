import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-list/city-edit/city-edit.component';
import { WeatherStartComponent } from './weather/weather-start/weather-start.component';
import { WeatherDetailComponent } from './weather/weather-detail/weather-detail.component';
import { WeatherCityListComponent } from './weather/weather-city-list/weather-city-list.component';
import { WeatherCityItemComponent } from './weather/weather-city-list/weather-city-item/weather-city-item.component';
import { HistoryComponent } from './history/history.component';
import { AppRoutingModule } from "./app-routing.module";
import { CityService } from "./shared/city.service";
import { WeatherService } from "./weather/shared/weather.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    CityListComponent,
    CityEditComponent,
    WeatherStartComponent,
    WeatherDetailComponent,
    WeatherCityListComponent,
    WeatherCityItemComponent,
    HistoryComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CityService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
