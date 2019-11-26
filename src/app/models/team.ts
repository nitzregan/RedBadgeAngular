import { Profile } from '../models/Profile';

export interface Team {
    UserID?: number;
    TeamID?: number;
    ProfileID?: number;
    TeamName: string;
    Roster: Array<Profile>;
    // TeamEvents: Array<Events>;
}
