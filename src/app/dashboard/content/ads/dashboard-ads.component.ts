import { Component, Inject, OnInit } from '@angular/core';
import { Advertisement } from './interfaces/advertisement.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  list: Observable<any[]>;

  constructor(public dialog: MatDialog,
    private db: AngularFirestore) {
    this.list = db.collection<Advertisement>('ads').snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Advertisement>[]) => {
          return actions.map((a: DocumentChangeAction<Advertisement>) => {
            const data: Object = a.payload.doc.data() as Advertisement;
            const id = a.payload.doc.id;
            return { id: id, ...data };
          });
        }),
      );
  }

  ngOnInit() {
  }

  onAdd() {

    const dialogRef = this.dialog.open(AdsDialog, {
      width: '300px',
      data: { name: "", file_url: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // data from DialogData
      console.log(result)
      if (result != null) {
        this.db.collection('ads').add(result)
      }
    });
  }

  onDelete(item) {
    console.log(item)
    this.db.collection('ads').doc(item.id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
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
