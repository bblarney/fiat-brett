import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service'

import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor( 
    private nav: NavbarService,
    private authenticationService: AuthenticationService,
    private userService: UserService
    ) { 
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
    }

  ngOnInit() {
    this.nav.show();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

}
