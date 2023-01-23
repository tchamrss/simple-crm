import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signForm!: FormGroup;
  firebaseErrorMessage!: string;

  constructor( private authService: AuthService, private router:Router, private afAuth: AngularFireAuth){
    this.firebaseErrorMessage = '';
  }

  ngOnInit(){
    this.signForm = new FormGroup({
      'displayName': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)
    });

  }

  signup() {
    if (this.signForm.invalid) {
      return;
    }
    this.afAuth
    .createUserWithEmailAndPassword(this.signForm.value.email, this.signForm.value.password)
    .then(res => {
      if (res.credential == null) {       
        console.log('You are Successfully signed up!', res);
        this.router.navigate(['/dashboard'])
      }
    
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
    }

}
