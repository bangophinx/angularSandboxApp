import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import { User } from "../models/User";

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Esco',
        lastName: 'Phinx',
        email: 'muco@fuck.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Mona',
        lastName: 'Claire',
        email: 'tango@g.com',
        isActive: false,
        hide: true
      }
    ];
   }

   getData(){
     this.data = new Observable(observer =>{
      setTimeout(() => {
        observer.next("Esco");        
      }, 1000);
      
      setTimeout(() => {
        observer.next("is");        
      }, 2000);
      
      setTimeout(() => {
        observer.next("the");        
      }, 3000);
      
      setTimeout(() => {
        observer.next("Man");        
      }, 4000);

     });

     return this.data;

   }



   getUsers():Observable<User[]>{
     return of(this.users);
   }

   addUser(user: User){
     this.users.unshift(user);
   }


}
