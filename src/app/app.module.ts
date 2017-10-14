import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { BlogService } from './services/blog.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBmxcKa9XWey1Z0fY2Qn7qB3VWkn6kclRA",
  authDomain: "besafe-594a2.firebaseapp.com",
  databaseURL: "https://besafe-594a2.firebaseio.com",
  projectId: "besafe-594a2",
  storageBucket: "besafe-594a2.appspot.com",
  messagingSenderId: "27170852671"
}


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    BlogComponent,
    UpdatesComponent,
    FaqComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth, AngularFireDatabase, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
