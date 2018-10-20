import {Component, OnInit} from "@angular/core";
import { Advertisement } from './interfaces/advertisement.interface';

@Component({
  selector: "app-dashboard-ads",
  templateUrl: "./dashboard-ads.component.html",
  styleUrls: ["./dashboard-ads.component.css"]
})
export class DashboardAdsComponent implements OnInit {
  constructor() {}

  list = [
    {"title": "Ad1", "url": "https://example.com/video"} as Advertisement,
    {"title": "Ad2", "url": "https://some.com/video"} as Advertisement,
    {"title": "Ad3", "url": "https://just.com/video"} as Advertisement,
    {"title": "Ad4", "url": "https://site.com/video"} as Advertisement,
    {"title": "Ad5", "url": "https://well.com/video"} as Advertisement,
    {"title": "Ad6", "url": "https://we.com/video"} as Advertisement,
    {"title": "Ad7", "url": "https://are.com/video"} as Advertisement,
    {"title": "Ad42", "url": "https://bored.com/video"} as Advertisement,
  ]
  ngOnInit() {
  }
}