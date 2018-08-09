import { User } from './User';

export class Movie {
    id: Number;
    title: string;
    yearReleased: Number;
    length: string;
    usersWatched: User[];
}
