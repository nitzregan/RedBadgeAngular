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
   
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
