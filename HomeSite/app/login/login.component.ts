import { Component } from "@angular/core";
import { Login } from "../models/models"
import { AuthService } from '../services/services'

@Component({
  selector: "app-login",
  templateUrl: "/app/login/login.component.html"
})

export class LoginComponent {
    data: Login;
    
    constructor(private authService:AuthService) {
        this.data = new Login();
    }

    onSubmit() {
        console.log(this.data);
        this.authService.authenticate(this.data);
    }
}
 