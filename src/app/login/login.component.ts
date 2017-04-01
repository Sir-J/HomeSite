import { Component, OnInit } from '@angular/core';
import { Login } from '../models';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Login;

  constructor(private authService: AuthService) {
    this.data = new Login();
  }

  onSubmit() {
    //this.authService.authenticate(this.data);
  }

  ngOnInit() { }

}
