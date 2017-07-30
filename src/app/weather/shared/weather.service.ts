import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { WeatherOwm } from "./weather-owm.model";

@Injectable()
export class WeatherService{
    private url: string = "http://localhost:8684/api";
    private subUrl: string = "weather";

    constructor(private http: Http){}

    getWeather(city: string, qtyDays:number){
        return this.http.get(`${this.url}/${this.subUrl}/${city}/${qtyDays}`)
    }
}