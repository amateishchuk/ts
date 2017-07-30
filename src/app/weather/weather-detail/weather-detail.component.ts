import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { WeatherOwm } from "../shared/weather-owm.model";
import { WeatherService } from "../shared/weather.service";

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  weather: WeatherOwm
  city: string;

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.city = params['city'];

          this.weatherService.getWeather(this.city, 10)
            .subscribe((response) => {
              this.weather = response.json();
            }
          );
        }
      );
  }

}
