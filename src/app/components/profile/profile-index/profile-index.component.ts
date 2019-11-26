import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    // this.profileService.GetProfile(UserID).subscribe((profile: Profile[])=>{
      // bleh
    // });
  }
}
