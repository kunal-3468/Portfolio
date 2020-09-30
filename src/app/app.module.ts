import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material/material.module';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { Covid19TrackerComponent } from './work/covid19-tracker/covid19-tracker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { ShoppingSiteComponent } from './work/shopping-site/shopping-site.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AcademicsComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    Covid19TrackerComponent,
    ShoppingSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AvatarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
