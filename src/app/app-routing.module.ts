import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BeautyTreatmentComponent } from './beauty-treatment/beauty-treatment.component';
import { PackersMoversComponent } from './packers-movers/packers-movers.component';
import { DogTherapyComponent } from './dog-therapy/dog-therapy.component';
import { PhotoComponent } from './photo/photo.component';
import { EmotionalComponent } from './emotional/emotional.component';
import { CookComponent } from './cook/cook.component';
import { PaintingComponent } from './painting/painting.component';
import { Home1Component } from './home1/home1.component';
import { SigninComponent } from './signin/signin.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'services', component:ServicesComponent
  },
  {
    path:'home1', component:Home1Component
  },
  {
    path:'resources', component:ResourcesComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  },
  {
    path:'beauty-treatment', component:BeautyTreatmentComponent
  },
  {
    path:'packers-movers', component:PackersMoversComponent
  },
  {
    path:'dog-therapy', component:DogTherapyComponent
  },
  {
    path:'photo', component:PhotoComponent
  },
  {
    path:'emotional', component:EmotionalComponent
  },
  {
    path:'cook', component:CookComponent
  },
  {
    path:'painting', component:PaintingComponent
  },
  {
    path:'signin', component:SigninComponent
  },
  {
    path:'log-in', component:LogInComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login
  {
    path:'log-out', component:LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
