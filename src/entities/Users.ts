import * as  Firebase from "firebase/app";

export interface IUser {
    id: string;
    email: string;
    name: string;
}

export interface IUserHash {
    [key: string]: IUser;
}

export default class User implements IUser {
    public id: string;
    public email: string;
    public name: string;

    constructor(user: Firebase.User) {
        this.id = user.id;
        this.email = user.email || '';
        this.name = user.displayName || '';
    }
}