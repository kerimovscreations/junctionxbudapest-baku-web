import {Component, Inject, OnInit} from '@angular/core';
import { Advertisement } from './interfaces/advertisement.interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  file_url: string;
  name: string;
}

@Component({
  selector: 'app-dashboard-ads',
  templateUrl: './dashboard-ads.component.html',
  styleUrls: ['./dashboard-ads.component.css']
})
export class DashboardAdsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  list = [
    {'title': 'Ad1', 'url': 'https://example.com/video'} as Advertisement,
    {'title': 'Ad2', 'url': 'https://some.com/video'} as Advertisement,
    {'title': 'Ad3', 'url': 'https://just.com/video'} as Advertisement,
    {'title': 'Ad4', 'url': 'https://site.com/video'} as Advertisement,
    {'title': 'Ad5', 'url': 'https://well.com/video'} as Advertisement,
    {'title': 'Ad6', 'url': 'https://we.com/video'} as Advertisement,
    {'title': 'Ad7', 'url': 'https://are.com/video'} as Advertisement,
    {'title': 'Ad42', 'url': 'https://bored.com/video'} as Advertisement,
  ];

  ngOnInit() {
  }

  onAdd() {
    console.log("234234")

    const dialogRef = this.dialog.open(AdsDialog, {
      width: '250px',
      data: {name: "", file_url: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // data from DialogData
    });
  }

}

@Component({
  selector: 'ads-form-dialog',
  templateUrl: './dialog/ads-form-dialog.html',
})
export class AdsDialog {

  constructor(
    public dialogRef: MatDialogRef<AdsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
