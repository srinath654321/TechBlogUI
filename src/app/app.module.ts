import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatIconModule, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { JavaComponent } from './java/java.component';
import { SqlComponent } from './sql/sql.component';
import { RegisterComponent } from './register/register.component';
import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { ShareJavaInterviewQuestionComponent } from './share-java-interview-question/share-java-interview-question.component';
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
} from 'angularx-social-login';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

/** 
 * config takes two params
 * 1. Provider config array
 */
const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('478012754672-1mse86h3na9846b26t9cm8mbp94j7cno.apps.googleusercontent.com',
    googleLoginOptions)
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
    JavaComponent,
    SqlComponent,
    RegisterComponent,
    JavaInterviewQuestionsComponent,
    ShareJavaInterviewQuestionComponent,
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
    SocialLoginModule
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, MatNativeDateModule, TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
