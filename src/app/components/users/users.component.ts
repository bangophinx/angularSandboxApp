import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyle = {};

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loadUsers();
    }, 500);


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
        image:'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 500,
        registered: new Date('01/02/2018 08:30:00')
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
        image:'../../assets/fm.jpg',
        isActive: true,
        balance: 50,
        registered: new Date('03/11/2017 09:35:00')
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
        image:'../../assets/mc.jpg',
        isActive: false
      }
    ];

    this.loaded = true;

    this.addUser();

    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  addUser() {
    this.users.push(
      {
        firstName: 'Papa',
        lastName: 'Claire',
        // age: 72,
        // address: {
        //   street: '99 South',
        //   city: 'Dager',
        //   county: 'Menmd'
        // }
      }
    );
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'bigText': this.enableAdd
    }
  }

  setCurrentStyle(){
    this.currentStyle = {
      'padding': this.showExtended ? '' : '20px',
      'font-size': this.showExtended ? '' : '3em'

    }
  }



}
