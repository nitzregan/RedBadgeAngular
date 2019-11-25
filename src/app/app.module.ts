import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule, 
  MatInputModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

const routes = [
  {path: 'register', component: RegistrationComponent}, 
  {path: 'login', component: LoginComponent },
  { path: 'events', component: EventIndexComponent },
  { path: '**', component: RegistrationComponent }
];


import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileDetailComponent } from './components/profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { GetProfileComponent } from './components/profile/get-profile/get-profile.component';
import { GetProfileByTeamComponent } from './components/profile/get-profile-by-team/get-profile-by-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    EventIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    ProfileIndexComponent,
    ProfileCreateComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
    GetProfileComponent,
    GetProfileByTeamComponent,
  ],

  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
