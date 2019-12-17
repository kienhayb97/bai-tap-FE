import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-con-cho',
  templateUrl: './con-cho.component.html',
  styleUrls: ['./con-cho.component.css']
})
export class ConChoComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService, private  router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['listClazz']);
    this.userService.userOnline.userName = this.cookieService.get('username');
    this.userService.userOnline.jwtToken = this.cookieService.get('jwtToken');
    // @ts-ignore
    this.userService.userOnline.role = window.sessionStorage.getItem('password');
  }
  logout() {
    this.cookieService.delete('username');
    this.cookieService.delete('jwtToken');
    window.sessionStorage.removeItem('password');
    this.userService.userOnline.userName = '';
    this.userService.userOnline.jwtToken = '';
    // @ts-ignore
    this.userService.userOnline.role = '';
    window.location.reload();
  }
}
