import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextboxComponent } from './textbox/textbox.component';
import { SigninComponent } from './signin/signin.component';
import { IsAuthenticated } from './app-auth';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '',
    children: [
      { 
        path: '', 
        component: SigninComponent, 
      },
      { 
        path: 'textarea', 
        canActivate: [IsAuthenticated],
        component: TextboxComponent, 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsAuthenticated],
})
export class AppRoutingModule { }
