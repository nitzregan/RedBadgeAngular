import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {

  team: Team;
  editForm: FormGroup;

  //private router: Router
  constructor(private formBuilder: FormBuilder, private teamService: TeamService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamService.getTeamByID(params.get('TeamID')).subscribe((team: Team) => {
        this.team = this.team;
        this.createForm();
      });
    });
  } 

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      TeamID: new FormControl(this.team.TeamID),
      TeamName: new FormControl(this.team.TeamName),
    });
  }

  onSubmit() {
    const updatedTeam: Team = {
      TeamID: this.editForm.value.TeamID,
      TeamName: this.editForm.value.TeamName,
    };
    this.teamService.updateTeam(updatedTeam).subscribe(() =>{
      this.router.navigate(['/team']);
    });
  }
}
