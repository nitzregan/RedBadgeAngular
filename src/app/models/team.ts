import { NumberValueAccessor } from '@angular/forms';

export interface Team {
    UserID?: number;
    TeamID?: number;
    ProfileID?: number;
    TeamName: string;
    Roster?: Array<string>;
    TeamEvents?: Array<string>;
}