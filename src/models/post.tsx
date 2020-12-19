import { IComment } from './comment';
import { IUser } from './user';

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: string;
    comments?: Array<IComment>;
    user?: IUser;
}
