import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
