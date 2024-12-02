import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { RouterModule } from '@angular/router';  // Import RouterModule
import { AppRoutingModule } from './app/app-routing.module';  // Import the routing module

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//   bootstrapApplication(AppComponent, {
//     providers: [AppRoutingModule],  // Provide the routing module here
//   });

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, // Add the AppRoutingModule here
  ],
})
export class AppModule { }
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));