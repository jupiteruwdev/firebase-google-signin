import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class IsAuthenticated implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedin()) 
      return true
    
    this.router.navigateByUrl('/')
    return false
  }
}