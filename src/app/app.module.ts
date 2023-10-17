import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './create/step1/step1.component';
import { Step2Component } from './create/step2/step2.component';
import { Step3Component } from './create/step3/step3.component'; // Import Step3Component if you have it
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AppComponent, Step1Component, Step2Component, Step3Component, SignInComponent, SignUpComponent], // Add Step2Component and Step3Component here
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
