import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  user: User = new User;
  loading = false;
  birthDate!:Date;
  userId! : string;

  constructor(public dialog: MatDialogRef<DialogEditUserComponent>,  public firestore: AngularFirestore ){

  }

  saveUser(){
    this.loading = true;
   /*  this.user.birthDate =  this.birthDate.getTime(); */
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then((result:any)=>{    
      this.loading = false;
      this.dialog.close();
    });

  }

}
