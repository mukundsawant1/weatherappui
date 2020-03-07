import { Component, OnInit } from '@angular/core';  
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';  
import { Socialusers } from '../model/Socialusers'  
//import { SocialloginService } from '../Service/sociallogin.service';  
import { Router } from '@angular/router';  
@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html'
  //,  
  //styleUrls: ['./dashboard.component.css']  
})  
export class DashboardComponent implements OnInit {  
  socialusers = new Socialusers();  
  constructor(public OAuth: AuthService,    private router: Router) { }  
  ngOnInit() {  
    //this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    console.log(this.socialusers.image);  
  }  
  logout() {  
   alert(1);  
    this.OAuth.signOut().then(data => {  
      debugger;  
      this.router.navigate([`/Login`]);  
    });  
  }  
}