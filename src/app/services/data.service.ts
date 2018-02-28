import { Injectable } from '@angular/core';

import { User } from "../models/User";

@Injectable()
export class DataService {
  users: User[];

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

   getUsers():User[]{
     console.log('fetching users from service')
     return this.users;
   }

   addUser(user: User){
     this.users.unshift(user);
   }


}
