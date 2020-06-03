import { AuthLocalService } from './../auth.local.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean;
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
    this.route.snapshot.queryParamMap.get('returnurl')
    console.log(this.route.queryParams)
    console.log("redirect url ", this.reDirectUrl)

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }


  onGoogleSignIn() : void {
    this.loading = true;
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log ("signed  in user ", user);
      if (this.loggedIn) {
        console.log("user logged in ", user)
        this.loading = true;
        this.user = user;
        sessionStorage.setItem("userId", this.user.id);
        sessionStorage.setItem("firstName", this.user.firstName);
        sessionStorage.setItem("imageUrl", this.user.photoUrl);
        sessionStorage.setItem("email", this.user.email);
        sessionStorage.setItem("fullName", this.user.name);
        sessionStorage.userLoggedIn = true;

        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || 'profile'])
      } else {
        this.loading = false;
      }
    }).catch(err => {
      alert(err);
      this.loading = false;
    })
  }

  onRegister(){
    this.router.navigate(['register']);
  }

}
