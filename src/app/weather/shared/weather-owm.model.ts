import { City } from "../../shared/city.model";
import { List } from "./list.model";

export class WeatherOwm {
        city: City;
        cod: string;
        message: number;
        cnt: number;
        list: List[];
    }
