import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Headers } from "@angular/http";

import { City } from "./city.model";
import { Subject } from "rxjs/Subject";


@Injectable()
export class CityService {        
    private url: string  = "http://localhost:8684";
    private subUrl: string = "api/city";
    private cities: City[];
    citiesChanged = new Subject<City[]>();
    startedEditing = new Subject<number>();
    private headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

    constructor(private http: Http) {
    }

    getCities(){
        return this.http.get(`${this.url}/${this.subUrl}`);
    }

    getCity(index: number) {
        return this.http.get(`${this.url}/${this.subUrl}/${index}`);
    }


    addCity(city: string) {
        const body = JSON.stringify(city);        
        return this.http.post(`${this.url}/${this.subUrl}`, body, {headers: this.headers});
    }

    updateCity(id: number, city: City) {
        return this.http.put(`${this.url}/${this.subUrl}/${id}`, city, {headers: this.headers})
    }

    deleteCity(id: number) {
        return this.http.delete(`${this.url}/${this.subUrl}/${id}`);
    }

//     ingredientsChanged = new Subject<Ingredient[]>();
//   startedEditing = new Subject<number>();
//   private ingredients: Ingredient[] = [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ];

//   getIngredients() {
//     return this.ingredients.slice();
//   }

//   getIngredient(index: number) {
//     return this.ingredients[index];
//   }

//   addIngredient(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   addIngredients(ingredients: Ingredient[]) {
//     // for (let ingredient of ingredients) {
//     //   this.addIngredient(ingredient);
//     // }
//     this.ingredients.push(...ingredients);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   updateIngredient(index: number, newIngredient: Ingredient) {
//     this.ingredients[index] = newIngredient;
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   deleteIngredient(index: number) {
//     this.ingredients.splice(index, 1);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

}