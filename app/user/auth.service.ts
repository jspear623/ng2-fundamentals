import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser: IUser;
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }
    updateCurrentUser(firstname:string, lastname:string):void{
        this.currentUser.firstName = firstname;
        this.currentUser.lastName = lastname;
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
}