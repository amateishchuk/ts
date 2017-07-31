import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherStartComponent } from './weather/weather-start/weather-start.component';
import { WeatherDetailComponent } from './weather/weather-detail/weather-detail.component';
import { WeatherCityListComponent } from './weather/weather-city-list/weather-city-list.component';
import { WeatherCityItemComponent } from './weather/weather-city-list/weather-city-item/weather-city-item.component';
import { HistoryComponent } from './history/history.component';
import { AppRoutingModule } from "./app-routing.module";
import { CityService } from "./shared/city.service";
import { WeatherService } from "./weather/shared/weather.service";
import { HistoryService } from "./history/shared/history.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    CityListComponent,
    WeatherStartComponent,
    WeatherDetailComponent,
    WeatherCityListComponent,
    WeatherCityItemComponent,
    HistoryComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CityService,
    WeatherService,
    HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
