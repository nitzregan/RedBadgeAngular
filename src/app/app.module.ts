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
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { GetProfileComponent } from './components/profile/get-profile/get-profile.component';
import { GetProfileByTeamComponent } from './components/profile/get-profile-by-team/get-profile-by-team.component';


import { TeamMessagingIndexComponent } from './components/team-messaging/team-messaging-index/team-messaging-index.component';
import { TeamMessagingCreateComponent } from './components/team-messaging/team-messaging-create/team-messaging-create.component';
import { TeamMessagingDetailComponent } from './components/team-messaging/team-messaging-detail/team-messaging-detail.component';
import { TeamMessagingUpdateComponent } from './components/team-messaging/team-messaging-update/team-messaging-update.component';

import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';
import { TeamUseridComponent } from './components/team/team-userid/team-userid.component';
import { TeamMessagingDeleteComponent } from './components/team-messaging/team-messaging-delete/team-messaging-delete.component';
import { TeamAddplayerComponent } from './components/team/team-addplayer/team-addplayer.component';
import { TeamRemoveplayerComponent } from './components/team/team-removeplayer/team-removeplayer.component';


import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';


import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TeamService } from './services/team-services.service';
import { TeamMessagingService } from './services/team-messaging.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent },
  { path: '**', component: RegistrationComponent },

      { path : 'teammessages', component: TeamMessagingIndexComponent },
      { path: 'teammessages/create', component: TeamMessagingCreateComponent},
      { path: 'teammessages/detail/:MessageID', component: TeamMessagingDetailComponent },
      { path: 'teammessages/update/:MessageID', component: TeamMessagingUpdateComponent },
      { path: 'teammessages/delete/:MessageID', component: TeamMessagingDeleteComponent},

      { path: 'team', component: TeamIndexComponent },
      { path: 'team/create/:ProfileID', component: TeamCreateComponent },
      { path: 'team/deatail/:TeamID', component: TeamDetailComponent },
      { path: 'team/update/:TeamID', component: TeamUpdateComponent },
      { path: 'team/delete/:TeamID', component: TeamDeleteComponent },
      { path: 'team/userid/:UserID', component: TeamUseridComponent},
      { path: 'team/addplayer/:ProfileID', component: TeamAddplayerComponent},
      { path: 'team/removeplayer/:ProfileID', component: TeamRemoveplayerComponent},
    
      { path: 'event', component: EventIndexComponent },
      { path: 'event/create', component: EventCreateComponent },
      { path: 'event/detail/:EventID/:TeamID', component: EventDetailComponent },
      { path: 'event/edit', component: EventEditComponent },
      { path: 'event/delete/:EventID', component: EventCreateComponent },

    
      { path: 'profile/:TeamID', component: ProfileIndexComponent},
      { path: 'profile', component: ProfileEditComponent},
      { path: 'profile/:TeamID', component: GetProfileByTeamComponent},
      { path: 'profile/:UserID', component: GetProfileComponent},

];



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
    TeamUpdateComponent,
    TeamUseridComponent,
    LoginComponent,
    EventIndexComponent,
    ProfileIndexComponent,
    ProfileEditComponent,
    GetProfileComponent,

    TeamAddplayerComponent,
    TeamRemoveplayerComponent,
    GetProfileByTeamComponent,

    EventCreateComponent,
    EventDetailComponent,
    EventEditComponent,
    EventDeleteComponent,

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
  ],
  
  

  providers: [AuthService, EventService, TeamMessagingService, ProfileService, TeamService],

  bootstrap: [AppComponent]
})
export class AppModule { }