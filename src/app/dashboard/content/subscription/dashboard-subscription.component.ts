import { Component, OnInit } from "@angular/core";
import { Subscription } from "./interfaces/subscription.interface";
import { Event } from './enums/event.enum';

@Component({
  selector: "app-dashboard-subscription",
  templateUrl: "./dashboard-subscription.component.html",
  styleUrls: ["./dashboard-subscription.component.css"]
})
export class DashboardSubscriptionComponent implements OnInit {
  constructor() { }

  list = [
    { "number": "234234234", "event": Event.CalledNumber } as Subscription,
    { "number": "234234234", "event": Event.Busy } as Subscription,
    { "number": "234234234", "event": Event.CalledNumber } as Subscription,
    { "number": "234234234", "event": Event.Answer } as Subscription,
    { "number": "234234234", "event": Event.NoAnswer } as Subscription,
    { "number": "234234234", "event": Event.CalledNumber } as Subscription,
    { "number": "234234234", "event": Event.Disconnected } as Subscription,
    { "number": "234234234", "event": Event.NotReachable } as Subscription,
    { "number": "234234234", "event": Event.CalledNumber } as Subscription
  ]

  ngOnInit() {
  }
}