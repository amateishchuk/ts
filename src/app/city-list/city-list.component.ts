import { Component, OnInit } from '@angular/core';
import { City } from "../shared/city.model";
import { CityService } from "../shared/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(
        (response) => {
          this.cities = response.json();
        }
      );            
  }    
}
