import { Component, OnInit } from "@angular/core";
import { Statistics } from './interfaces/statistics.interface';

@Component({
  selector: "app-dashboard-statistics",
  templateUrl: "./dashboard-statistics.component.html",
  styleUrls: ["./dashboard-statistics.component.css"]
})
export class DashboardStatisticsComponent implements OnInit {
  constructor() { }

  list = [
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 13 , users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 10 , users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 1000, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 6500, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 14 , users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] } as Statistics,
  ]

  ngOnInit() {
  }
}