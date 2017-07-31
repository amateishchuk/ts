import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

import { City } from "../shared/city.model";
import { CityService } from "../shared/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  @ViewChild('f') cityForm: NgForm;
  cities: City[];
  editMode = false;
  editedItemIndex: number;

  constructor(private cityService: CityService) { }

  ngOnInit() {
      this.getCities();     
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const city = new City(this.editedItemIndex, value.name);
    if (this.editMode) {
      this.updateCity(this.editedItemIndex, city);
    } else {
      this.addCity(value.name);
    }
    this.editMode = false;
    form.reset();
    this.getCities();
  }

  onEditCity(city:City){
    this.editMode = true;
    this.editedItemIndex = city.id;
    this.cityForm.setValue({
      name: city.name,
    });
  }

  onClear() {
    this.cityForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.deleteCity(this.editedItemIndex);
    this.onClear();
    this.getCities();
  }

  private addCity(city: string){
    this.cityService.addCity(city).subscribe();
  }
  private updateCity(index: number, city: City){
    this.cityService.updateCity(index, city).subscribe();
  }
  private deleteCity(index: number){
    this.cityService.deleteCity(index).subscribe();
  }
  
  private getCities(){
    this.cityService.getCities()
      .subscribe(
        (response) => {
          this.cities = response.json();
        }
      ); 
  }    
}
