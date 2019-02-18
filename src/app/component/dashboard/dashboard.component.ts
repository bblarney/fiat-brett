import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../service/navbar.service';
import { SidebarService } from '../../service/sidebar.service';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../../service/authentication.service';
import { UserService } from '../../service/user.service'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor( public nav: NavbarService, public sidebar: SidebarService, private authService: AuthenticationService, private userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
    //location.reload();
    this.nav.show(); 
    this.sidebar.show();
    this.userService.getUser(this.userService.currentUser()).subscribe(
      res => this.user = res,
    )};
}

