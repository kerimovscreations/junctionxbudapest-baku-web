import { Component, Inject, OnInit } from '@angular/core';
import { Statistics } from './interfaces/statistics.interface'
import { User } from './interfaces/user.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  list: Observable<any[]>;

  constructor(public dialog: MatDialog,
    private db: AngularFirestore) {
    this.list = db.collection<Statistics>('logs').snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Statistics>[]) => {
          return actions.map((a: DocumentChangeAction<Statistics>) => {
            const data: Object = a.payload.doc.data() as Statistics;
            const id = a.payload.doc.id;
            return { id: id, ...data };
          });
        }),
      );
      console.log(this.list)
  }


  ngOnInit() {
  }

  onUsers(item) {
    const dialogRef = this.dialog.open(StatisticsDialog, {
      width: '550px',
      data: item.users
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
