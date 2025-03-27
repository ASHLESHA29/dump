import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ResourcesComponent,
    AboutUsComponent,
    ContactUsComponent,
    BeautyTreatmentComponent,
    PackersMoversComponent,
    DogTherapyComponent,
    PhotoComponent,
    EmotionalComponent,
    CookComponent,
    PaintingComponent,
    Home1Component,
    SigninComponent,
    SignOutComponent,
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
