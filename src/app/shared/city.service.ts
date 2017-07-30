import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { City } from "./city.model";
import { Subject } from "rxjs/Subject";


@Injectable()
export class CityService {        
    private url: string  = "http://localhost:8684";
    private subUrl: string = "api/city";
    private cities: City[];
    citiesChanged = new Subject<City[]>();

    constructor(private http: Http) { }

    getCities(){
        return this.http.get(`${this.url}/${this.subUrl}`);
    }

    addRecipe(city: City) {
        // this.recipes.push(recipe);
        // this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, city: City) {
        // this.recipes[index] = newRecipe;
        // this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        // this.recipes.splice(index, 1);
        // this.recipesChanged.next(this.recipes.slice());
    }
}