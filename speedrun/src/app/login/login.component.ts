import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  firebaseErrorMessage!: string;

  constructor( private authService: AuthService, private router:Router, private afAuth: AngularFireAuth){
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)
    });
    this.firebaseErrorMessage = '';
  }

  loginUser() {
    this.afAuth
    .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
    .then(res => {
      this.router.navigate(['/dashboard']);
    console.log('login successfull', res);
    })
    .catch(err => {
    console.log('Something went wrong:',err.message);
    });
    }



  /* loginUser(){
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result:any) =>{
      if (result == null) {
        this.router.navigate(['/dashboard']);
      }else if (result.isValid == false) {
        this.firebaseErrorMessage = result.message;
        
      }
    }); 
  }*/

}
