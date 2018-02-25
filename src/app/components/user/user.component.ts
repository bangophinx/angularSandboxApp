import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: User;

  // Method constructor runs when object (component) is instanciated
  constructor() {
  }

  // ngOnInit runs when object (component) is instanciated 
  ngOnInit() {
    this.user = {
      firstName: 'Esco',
      lastName: 'Phinx',
      age: 32,
      address: {
        street: '20 Riverside',
        city: 'Cobh',
        county: 'Cork'
      }
    }
  }

}


