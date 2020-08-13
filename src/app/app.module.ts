import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatIconModule, MatSnackBarModule, MatProgressBarModule, MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { ShareInterviewQuestionComponent } from './share-interview-question/share-interview-question.component';
import { LoginAlertComponent } from './login-alert/login-alert.component';
import { WorkExpAddDialogComponent } from './work-exp-add-dialog/work-exp-add-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';
import { TruncatePipe } from './truncate.pipe';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { UserContactEditDialogComponent } from './user-contact-edit-dialog/user-contact-edit-dialog.component';
import { UserAboutEditDialogComponent } from './user-about-edit-dialog/user-about-edit-dialog.component';
import { CertificationComponent } from './certification/certification.component';
import { CertificationDialogComponent } from './certification-dialog/certification-dialog.component';
import { SkillComponent } from './skill/skill.component';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {
  SocialLoginModule, 
  AuthServiceConfig,
  GoogleLoginProvider,
  LoginOpt,
  FacebookLoginProvider, 
} from 'angularx-social-login';
import { TopicComponent } from './topic/topic.component';
import { OverlayComponent } from './overlay/overlay.component';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig


const facebookLogInOptions: LoginOpt = {
  scope: 'email',
  enable_profile_selector: true
}

/** 
 * config takes two params
 * 1. Provider config array
 */
const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('478012754672-1mse86h3na9846b26t9cm8mbp94j7cno.apps.googleusercontent.com',
    googleLoginOptions)
  },

  {
    id : FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('549987245674957', facebookLogInOptions)
  }
]);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    JavaInterviewQuestionsComponent,
    ShareInterviewQuestionComponent,
    LoginAlertComponent,
    WorkExpAddDialogComponent,
    AlertDialogComponent,
    EducationDetailsComponent,
    EducationDialogComponent,
    TruncatePipe,
    WorkExperienceComponent,
    UserContactEditDialogComponent,
    UserAboutEditDialogComponent,
    CertificationComponent,
    CertificationDialogComponent,
    SkillComponent,
    SkillDialogComponent,
    ContactComponent,
    TopicComponent,
    OverlayComponent,
  ],
  
  entryComponents: [AlertDialogComponent, EducationDialogComponent, UserContactEditDialogComponent, 
    WorkExpAddDialogComponent,SkillDialogComponent, CertificationDialogComponent, 
    UserAboutEditDialogComponent, RegisterComponent, LoginAlertComponent, NavbarComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SocialLoginModule,
    MatRadioModule
  ],
  providers: [ 
  {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, 
  MatNativeDateModule, 
  TruncatePipe,
  {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
