import { AuthLocalService } from './../auth.local.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  gloading:boolean;
  floading: boolean;
  isInValidUser: boolean;
  reDirectUrl: string;
  sub: Subscription;
  userName: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute, 
    private authService: AuthLocalService, private socialAuthService: AuthService) { }

  user : SocialUser;
  loggedIn : boolean;  

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }


  onGoogleSignIn() : void {
    this.gloading = true;
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log ("signed  in user ", user);
      if (this.loggedIn) {
        console.log("user logged in ", user)
        this.gloading = true;
        this.user = user;
        sessionStorage.setItem("userId", this.user.id);
        sessionStorage.setItem("firstName", this.user.firstName);
        sessionStorage.setItem("imageUrl", this.user.photoUrl);
        sessionStorage.setItem("email", this.user.email);
        sessionStorage.setItem("fullName", this.user.name);
        sessionStorage.userLoggedIn = true;

        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        console.log("return url", returnUrl);
        this.router.navigate([returnUrl || 'profile'])
      } else {
        this.gloading = false;
      }
    }).catch(err => {
      alert(err);
      this.gloading = false;
    })
  }

  onFacebookSignIn() {
    this.floading = true;
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {

      if (this.loggedIn == true) {

        console.log ("signed  in user ", user);

        this.floading = true;
        this.user = user;
        sessionStorage.setItem("userId", this.user.id);
        sessionStorage.setItem("firstName", this.user.firstName);
        sessionStorage.setItem("imageUrl", this.user.photoUrl);
        sessionStorage.setItem("email", this.user.email);
        sessionStorage.setItem("fullName", this.user.name);
        sessionStorage.userLoggedIn = true;

        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        console.log("return url", returnUrl);
        this.router.navigate([returnUrl || 'profile'])
      } else {
        this.floading = false;
      }
    }).catch(err => {
      alert(err);
      this.floading = false;
    })
  }

  onRegister(){
    this.router.navigate(['register']);
  }

}
