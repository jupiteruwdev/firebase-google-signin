import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    if (this.isLoggedin()) {
      this.router.navigateByUrl('/textarea')
    } else {
      return this.afAuth.signInWithPopup(provider)
        .then((result) => {
          this.setAuthInfo(result)
          this.router.navigateByUrl('/textarea')
        }).catch((error) => {
          console.log(error)
        })
    }
  }

  setAuthInfo(result) {
    window.localStorage.setItem('token', (<any>result.credential).accessToken)
    window.localStorage.setItem('email', (<any>result.user).email)
  }

  isLoggedin() {
    if (window.localStorage.getItem('token')) return true
    return false
  }
}