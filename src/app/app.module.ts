import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { RebelsComponent } from './rebels/rebels.component';
import { DataService } from './data.service';
import { RebelDetailComponent } from './rebel-detail/rebel-detail.component';
import { LoginComponent } from "app/login";
import { RegisterComponent } from "app/register";
import { HomeComponent } from "app/home";
import { SetupComponent } from "app/vasetup";
import { ProfileComponent } from "app/profile";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RebelsComponent,
    RebelDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SetupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
