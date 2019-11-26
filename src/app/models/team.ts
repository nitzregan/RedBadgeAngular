import { Profile } from '../models/Profile';
import { Event } from '../models/Event';

export interface Team {
    UserID?: number;
    TeamID?: number;
    ProfileID?: number;
    TeamName: string;
    Roster: Array<Profile>;
    TeamEvents: Array<Event>;
}
