import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatTooltipModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { JavaComponent } from './java/java.component';
import { SqlComponent } from './sql/sql.component';
import { RegisterComponent } from './register/register.component';
import { JavaInterviewQuestionsComponent } from './java-interview-questions/java-interview-questions.component';
import { ShareJavaInterviewQuestionComponent } from './share-java-interview-question/share-java-interview-question.component';
import { LoginAlertComponent } from './login-alert/login-alert.component';
import { UserPorfileEditDialogComponent } from './user-porfile-edit-dialog/user-porfile-edit-dialog.component';
import { SkillsAddDialogComponent } from './skills-add-dialog/skills-add-dialog.component';
import { CertificationsAddComponent } from './certifications-add/certifications-add.component';
import { WorkExpAddDialogComponent } from './work-exp-add-dialog/work-exp-add-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    LoginComponent,
    JavaComponent,
    SqlComponent,
    RegisterComponent,
    JavaInterviewQuestionsComponent,
    ShareJavaInterviewQuestionComponent,
    LoginAlertComponent,
    UserPorfileEditDialogComponent,
    SkillsAddDialogComponent,
    CertificationsAddComponent,
    WorkExpAddDialogComponent,
    AlertDialogComponent,
    EducationDetailsComponent,
    EducationDialogComponent,
    
  ],
  entryComponents: [AlertDialogComponent, EducationDialogComponent, UserProfileEditComponent,WorkExpAddDialogComponent,SkillsAddDialogComponent, CertificationsAddComponent, UserPorfileEditDialogComponent, RegisterComponent, LoginAlertComponent, NavbarComponent],
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
    MatNativeDateModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
