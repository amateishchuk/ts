import { Component, OnInit, Input } from '@angular/core';
import { City } from "../../../shared/city.model";

@Component({
  selector: 'app-weather-city-item',
  templateUrl: './weather-city-item.component.html',
  styleUrls: ['./weather-city-item.component.css']
})
export class WeatherCityItemComponent implements OnInit {
  @Input('cityEl') city: City;

  constructor() { }

  ngOnInit() {
  }

}
