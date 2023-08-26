import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '@auth0/auth0-angular';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loading: boolean = false;
  constructor(public oidcSecurityService: OidcSecurityService, private responsive: BreakpointObserver, private router:Router) {
    console.log(Breakpoints)
    
  }
  ngOnInit(){
    this.loading = true;
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      this.loading = false;
      const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
      console.log(isAuthenticated,userData,accessToken,idToken,configId)
      if(isAuthenticated){ 
        this.router.navigateByUrl("/home");
      }
    });
    let breaks:any = Array.from(Breakpoints as any)
    this.responsive.observe([Breakpoints.XSmall,Breakpoints.Small])
    .subscribe(result => {
      console.log(result)
        if (result.matches) {
          console.log("screens matches HandsetLandscape");
        }
    });
  }
  
  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
