import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { DialogAddUserComponent } from './dialog-add-user.component';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule.forRoot([]), MatDialogModule,MatFormFieldModule,MatDatepickerModule,  AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
      declarations: [ DialogAddUserComponent ],
      providers:[
        {
          provide: MatDialogRef,
          useValue:{}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
