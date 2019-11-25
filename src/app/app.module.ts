import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileDetailComponent } from './components/profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileIndexComponent,
    ProfileCreateComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
