import {Component, Inject, OnInit} from '@angular/core';
import { Subscription } from "./interfaces/subscription.interface";
import { Event } from './enums/event.enum';
import {DialogData} from '../ads/dashboard-ads.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  number: string;
  event: string;
}

@Component({
  selector: "app-dashboard-subscription",
  templateUrl: "./dashboard-subscription.component.html",
  styleUrls: ["./dashboard-subscription.component.css"]
})
export class DashboardSubscriptionComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

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

  onAdd() {
    const dialogRef = this.dialog.open(SubscriptionDialog, {
      width: '550px',
      data: {number: "", event: Event.Answer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // data from DialogData
      console.log(result)
    });
  }
}

@Component({
  selector: 'subscription-form-dialog',
  templateUrl: './dialog/subscription-form-dialog.html',
})
export class SubscriptionDialog {

  constructor(
    public dialogRef: MatDialogRef<SubscriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  optionList = [Event.Answer,
    Event.Busy,
  Event.CalledNumber,
  Event.Disconnected,
  Event.NoAnswer,
  Event.NotReachable]

  onNoClick() {
    this.dialogRef.close();
  }
}
