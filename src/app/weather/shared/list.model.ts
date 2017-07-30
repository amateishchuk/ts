import { Temp } from "./temperature.model";
import { Weather } from "./weather.model";

export class List {
        id: number;
        pressure: number;
        humidity: number;
        speed: number;
        deg: number;
        clouds: number;
        temp: Temp;
        dt: number;
        weather: Weather[];
        rain?: any;
    }