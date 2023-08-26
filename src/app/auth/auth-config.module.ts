import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-zz3l020xjrz2w3l1.us.auth0.com/authorize',
            redirectUrl: "http://localhost:3200/login",
            clientId: 'y6JOB0eknDz6r9jrkVVi86vuP37bVOGa',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
