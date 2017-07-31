import { Component, OnInit } from '@angular/core';

import { WeatherHistory } from "./shared/weather-history.model";
import { HistoryService } from "./shared/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  histories: WeatherHistory[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getHistory().subscribe((response) => {
      this.histories = response.json();
    })
  }

}
