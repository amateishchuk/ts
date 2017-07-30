import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { City } from "../../shared/city.model";
import { CityService } from "../../shared/city.service";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-weather-city-list',
  templateUrl: './weather-city-list.component.html',
  styleUrls: ['./weather-city-list.component.css']
})
export class WeatherCityListComponent implements OnInit, OnDestroy {
  cities: City[];
  subscription: Subscription;

  constructor(private cityService: CityService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.cityService.citiesChanged
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.json();
      console.log(this.cities);
      console.log(response);
    });
    
  }
  
  onShowWeather(city: string) {
    this.router.navigate([city], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
