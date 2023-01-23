import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User = new User;
  loading = false;
  userId! : string;

  constructor(public dialog: MatDialogRef<DialogEditAddressComponent>,  public firestore: AngularFirestore ){

  }

  saveUser(){
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then((result:any)=>{      
      this.loading = false;
      this.dialog.close();
    });

  }

}
