import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from "./interfaces/subscription.interface";
import { Event } from './enums/event.enum';
import { DialogData } from '../ads/dashboard-ads.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

export interface DialogData {
  phone: string;
  event: string;
}

@Component({
  selector: "app-dashboard-subscription",
  templateUrl: "./dashboard-subscription.component.html",
  styleUrls: ["./dashboard-subscription.component.css"]
})
export class DashboardSubscriptionComponent implements OnInit {
  list: Observable<any[]>;

  constructor(public dialog: MatDialog,
    private db: AngularFirestore) {
    this.list = db.collection<Subscription>('subscriptions').snapshotChanges()
    .pipe(
      map((actions: DocumentChangeAction<Subscription>[]) => {
        return actions.map((a: DocumentChangeAction<Subscription>) => {
          const data: Object = a.payload.doc.data() as Subscription;
          const id = a.payload.doc.id;
          return { id: id, ...data };
        });
      }),
    );
    console.log(this.list)
  }

  ngOnInit() {
  }

  onAdd() {
    const dialogRef = this.dialog.open(SubscriptionDialog, {
      width: '550px',
      data: { number: "", event: Event.Answer }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // data from DialogData
      console.log(result)
      if (result != null) {
        this.db.collection('subscriptions').add(result)
      }
    });
  }


  onDelete(item) {
    console.log(item)
    this.db.collection('subscriptions').doc(item.id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
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

  optionList = [
    Event.Answer,
    Event.Busy,
    Event.CalledNumber,
    Event.Disconnected,
    Event.NoAnswer,
    Event.NotReachable
  ]

  onNoClick() {
    this.dialogRef.close();
  }
}
