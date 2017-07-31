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
  qtyDays: number = 7;

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.city = params['city'];
          if (params['qtyDays']){
            this.qtyDays = +params['qtyDays'];
          }
          this.getWeather();
        }
      );
  }

  private getWeather(){
    this.weatherService.getWeather(this.city, this.qtyDays)
      .subscribe((response) => {
        this.weather = response.json();
      }
    );
  }
  addDays(days: number){
    var dat = new Date();
    dat.setDate(dat.getDate() + days);
    return dat.toDateString();
  }
}
