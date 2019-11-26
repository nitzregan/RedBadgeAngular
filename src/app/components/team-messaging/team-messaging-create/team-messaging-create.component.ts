import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-messaging-create',
  templateUrl: './team-messaging-create.component.html',
  styleUrls: ['./team-messaging-create.component.css']
})
export class TeamMessagingCreateComponent implements OnInit {

  teamMessagingCreateForm: FormGroup;

  constructor(private _form: FormBuilder, private _TeamMessagingService: TeamMessagingService, private _router: Router) { 
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.teamMessagingCreateForm = this._form.group({
      Title: new FormControl,
      Content: new FormControl,
      File: new FormControl,
    })
  }

  onSubmit() {
    this._TeamMessagingService.createTeamMessage(this.teamMessagingCreateForm.value).subscribe(data => {
      this._router.navigate(['/teammassaging']);
    })
  }

}