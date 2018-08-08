import { User } from './User';

export class Movie {
    id: Number;
    name: string;
    yearReleased: Number;
    length: string;
    usersWatched: User[];
}
