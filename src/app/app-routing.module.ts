import { BrowserModule } from '@angular/platform-browser';
import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ShareInterviewQuestionComponent } from './share-interview-question/share-interview-question.component';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';


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
    path: 'topic',
    component: TopicComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'java/javaInterviewQuestions',
    component: JavaInterviewQuestionsComponent
  },
  {
    path : 'shareInterviewQuestion',
    component: ShareInterviewQuestionComponent
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
