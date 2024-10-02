import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { DisclaimerComponent } from './common/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './common/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './common/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'contact', component: ContactUsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule] 
})
export class AppRoutingModule { }
