import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { UserinputComponent } from './userinput/userinput.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



export const firebaseConfig = {
  apiKey: 'AIzaSyDAPdoaCMAoXefJWpwASWZEPC2CZ0OnZ1M',
  authDomain: 'testi-571dd.firebaseapp.com',
  databaseURL: 'https://testi-571dd.firebaseio.com',
  projectId: 'testi-571dd',
  storageBucket: 'testi-571dd.appspot.com',
  messagingSenderId: '1006822070751'
};

@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


