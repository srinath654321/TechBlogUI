import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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


  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(
      (params) =>{
        this.reDirectUrl = params['reDirectUrl'];
      });
    console.log(this.route.queryParams)
    console.log("redirect url ", this.reDirectUrl)
  }

  onLogin(){
    this.loading = true;
    if (this.authService.isUserLoggedIn(this.userName, this.password)) {
      console.log(this.userName, this.password)
      this.loading = false;
      sessionStorage.userLoggedIn = true;
      console.log("return url ", this.reDirectUrl)
      if(this.reDirectUrl ==  undefined) {
        this.router.navigateByUrl('/profile');
      }else{
        this.router.navigateByUrl(this.reDirectUrl);
      }
    }else{
      this.loading = false;
      this.isInValidUser = true;
    }

  }

  onRegister(){
    this.router.navigate(['register']);
  }

}
