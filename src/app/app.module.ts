import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatTableModule, } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { RegistrationComponent } from './components/registration/registration.component';

import { TeamMessagingService } from './services/team-messaging.service';
import { TeamMessagingIndexComponent } from './components/team-messaging/team-messaging-index/team-messaging-index.component';
import { TeamMessagingCreateComponent } from './components/team-messaging/team-messaging-create/team-messaging-create.component';
import { TeamMessagingDetailComponent } from './components/team-messaging/team-messaging-detail/team-messaging-detail.component';
import { TeamMessagingUpdateComponent } from './components/team-messaging/team-messaging-update/team-messaging-update.component';
import { TeamMessagingDeleteComponent } from './components/team-messaging/team-messaging-delete/team-messaging-delete.component';

import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  {
    pathTeamMessages: 'teammessages', childrenTeamMessages: [
      { path : '', component: TeamMessagingIndexComponent },
      { path: 'create', component: TeamMessagingCreateComponent},
      { path: 'detail/:MessageID', component: TeamMessagingDetailComponent },
      { path: 'edit/:MessageID', component: TeamMessagingUpdateComponent },
      { path: 'delete/:MessageID', component: TeamMessagingDeleteComponent}
    ],
    pathTeam: 'team', childrenTeam: [
      { path: '', component: TeamIndexComponent },
      { path: 'create/:ProfileID', component: TeamCreateComponent },
      { path: 'deatail/:TeamID', component: TeamDetailComponent },
      { path: 'edit/:TeamID', component: TeamUpdateComponent },
      { path: 'delete/:TeamID', component: TeamDeleteComponent }
    ]
  },
  { path: '**', component: RegistrationComponent }, 
];

import { LoginComponent } from './components/login/login.component';

const routes = [
  {path: 'register', component: RegistrationComponent}, 
  {path: 'login', component: LoginComponent },
  { path: 'events', component: EventIndexComponent },
  { path: '**', component: RegistrationComponent }
];


import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { ProfileService } from 'src/app/services/profile.service';
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
    TeamMessagingIndexComponent,
    TeamMessagingCreateComponent,
    TeamMessagingDetailComponent,
    TeamMessagingUpdateComponent,
    TeamMessagingDeleteComponent,
    TeamCreateComponent,
    TeamDetailComponent,
    TeamDeleteComponent,
    TeamIndexComponent,
    TeamUpdateComponent
    LoginComponent,
    EventIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    ProfileIndexComponent,
    ProfileCreateComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
    GetProfileComponent,
    GetProfileByTeamComponent,
  ],
  
  

  providers: [AuthService, EventService, TeamMessagingService, ProfileService],

  bootstrap: [AppComponent]
})
export class AppModule { }