import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
