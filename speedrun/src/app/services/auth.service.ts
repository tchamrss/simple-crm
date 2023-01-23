import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) =>{
      if (user) {
        this.userLoggedIn = true;
      }else{
        this.userLoggedIn = false;
      }
    });
   }
/*     auth = getAuth();
   async signupUser(user:any): Promise<any>{
    console.log('********email_:*********',user.mail)
    return await this.afAuth.createUserWithEmailAndPassword(user.mail, user.password).then((result)=>{
      let emailLower = user.mail.toLowerCase();
      result.user.sendEmailVerification();
    }).catch(error => {
      console.log('Auth Service: signup error', error);
      if(error.code)
        return {isValid: false,message:error.message};
    });
   } */

  /*  async loginUser(email:string, password:string):Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email,password).then(() => {
        console.log('Auth Service: loginUser success');
      }).catch(error => {
        console.log('Login error...');
        console.log('error code', error.code);
        console.log('error', error);
        if(error.code)
          return {isValid: false,message:error.message};
      });

   } */
   

}
