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
  ],
  providers: [
    TeamMessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }