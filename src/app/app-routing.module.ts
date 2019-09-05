import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { JavaComponent } from './java/java.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SqlComponent } from './sql/sql.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'java',
    component:JavaComponent
  },
  {
    path: 'java/javaInterviewQuestions',
    component: JavaInterviewQuestionsComponent
  },
  {
    path: 'sql',
    component: SqlComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
