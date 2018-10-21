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
