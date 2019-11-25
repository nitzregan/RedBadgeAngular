import { Team } from '../models/Team';
import { Comments } from '../models/Comments';

export interface Profile {
    UserID?: number;
    ProfileID?: number;
    FirstName: string;
    LastName: string;
    Birthday?: Date;
    Email: string;
    PhoneNumber: string;
    OtherInfo: string;
    AthleteUsername: string;
    ParentUsername: string;
    MyTeams: Array<Team>;
    Comments: Array<Comments>;
    CreatedUtc?: Date;
}