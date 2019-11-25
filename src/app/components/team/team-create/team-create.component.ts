import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team-services.service';
import { Router } from '@angular/router';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamCreateForm: FormGroup;

  constructor(private _form: FormBuilder, private _TeamService: TeamService, private _router: Router) { 
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.teamCreateForm = this._form.group({
      TeamName: new FormControl,
    })
  }

  onSubmit(team: Team) {
    this._TeamService.createTeam(this.teamCreateForm.value, team.ProfileID).subscribe(data => {
      this._router.navigate(['/team']);
    })
  }

}
