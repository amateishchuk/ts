import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class HistoryService {
  private url: string  = "http://localhost:8684";
  private subUrl: string = "api/history";

  constructor(private http: Http) { }

  getHistory(){
    return this.http.get(`${this.url}/${this.subUrl}`);
  }
}
