import { Coord } from "../weather/shared/coordinate.model";

export class City {
        id: number;
        name: string;

        constructor(id: number, name: string){
            this.id = id;
            this.name = name;
        }
    }
