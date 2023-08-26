import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
//import { AuthService } from '@auth0/auth0-angular';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public oidcSecurityService: OidcSecurityService, private responsive: BreakpointObserver) {
    console.log(Breakpoints)
  }
  
}
