import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['above'];//['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  allUsers: any = [];

  constructor(public dialog: MatDialog, public firestore:AngularFirestore) {}

  ngOnInit(){
    this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any) =>{
      console.log('received changes from DB', changes);

      if (changes == null) {
        console.log('changes is null or undefined');
      } else {
        this.allUsers = changes;
      }
        /* this.allUsers = changes; */
    });

  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent);

  }

}
