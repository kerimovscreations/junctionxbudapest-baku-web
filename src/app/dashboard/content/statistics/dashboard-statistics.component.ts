import {Component, Inject, OnInit} from '@angular/core';
import { Statistics } from './interfaces/statistics.interface';
import { User } from './interfaces/user.interface';
import {SubscriptionDialog} from '../subscription/dashboard-subscription.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  user_name: string;
  user_number: string;
}

@Component({
  selector: "app-dashboard-statistics",
  templateUrl: "./dashboard-statistics.component.html",
  styleUrls: ["./dashboard-statistics.component.css"]
})
export class DashboardStatisticsComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  list = [
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 13 , users: [{"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"},
        {"name": "John Doe", "phone": "2312312"}]},
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 10 , users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 1000, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 6500, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 14 , users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] },
    { "ads": {"title": "AD1", "url": "https://example.com/video"}, count: 100, users: [{"name": "John Doe", "phone": "2312312"}] },
  ]

  ngOnInit() {
  }

  onUsers(index) {
    const dialogRef = this.dialog.open(StatisticsDialog, {
      width: '550px',
      data: this.list[index].users
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // data from DialogData
      console.log(result)
    });
  }
}

@Component({
  selector: 'statistics-form-dialog',
  templateUrl: './dialog/statistics-form-dialog.html',
})
export class StatisticsDialog {

  constructor(
    public dialogRef: MatDialogRef<StatisticsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: [User]) {
    this.users = data
  }

  users = []

  onNoClick() {
    this.dialogRef.close();
  }
}
