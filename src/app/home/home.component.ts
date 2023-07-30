import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
//import { AuthService } from '@auth0/auth0-angular';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public oidcSecurityService: OidcSecurityService, private router:Router) {

  }
  ngOnInit(){
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
      console.log(isAuthenticated,userData,accessToken,idToken,configId)
    });
  }
  
  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
