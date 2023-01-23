import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!:Date;
  loading = false;

  constructor(public dialog: MatDialogRef<DialogAddUserComponent>, public firestore: AngularFirestore) {

  }


  saveUser(){
    this.user.birthDate =  this.birthDate.getTime();
    this.loading = true;

    //schreiben im firestore

    this.firestore.collection('users').add(this.user.toJSON()).then((result:any)=>{    
      this.loading = false;
      console.log('adding user finished', result);
      this.dialog.close();
    });
  }

}
