import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      county: ''
    }
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loadUsers();
    }, 50);
  }

  loadUsers() {
    this.users = [
      {
        firstName: 'Esco',
        lastName: 'Phinx',
        age: 32,
        address: {
          street: '20 Riverside',
          city: 'Cobh',
          county: 'Cork'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Freda',
        lastName: 'Mills',
        age: 33,
        address: {
          street: '21 Mombe',
          city: 'Harare',
          county: 'Zim'
        },
        isActive: true,
        registered: new Date('03/11/2017 09:35:00'),
        hide: true
      },
      {
        firstName: 'Mona',
        lastName: 'Claire',
        age: 72,
        address: {
          street: '99 South',
          city: 'Dager',
          county: 'Menmd'
        },
        isActive: false,
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser() {
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        county: ''
      }
    };
  }

    onSubmit(e) {
      console.log(123);
      e.preventDefault();
    }

  }
