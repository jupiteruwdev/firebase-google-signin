import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextboxComponent } from './textbox/textbox.component';
import { SigninComponent } from './signin/signin.component';
import { IsAuthenticated } from './app-auth';

const routes: Routes = [
  { path: '',
    children: [
      { 
        path: '', 
        canActivate: [IsAuthenticated],
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
