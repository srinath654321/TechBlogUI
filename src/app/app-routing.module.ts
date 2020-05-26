import { BrowserModule } from '@angular/platform-browser';
import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { JavaComponent } from './java/java.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SqlComponent } from './sql/sql.component';
import { RegisterComponent } from './register/register.component';
import { ShareJavaInterviewQuestionComponent } from './share-java-interview-question/share-java-interview-question.component';
import { CommonModule } from '@angular/common';


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
    path : 'java/shareJavaInterviewQuestion',
    component: ShareJavaInterviewQuestionComponent
  },
  {
    path: 'sql',
    component: SqlComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
  { 
    path: 'blog', 
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) 
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: "reload",
        scrollOffset: [0, 64],
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
