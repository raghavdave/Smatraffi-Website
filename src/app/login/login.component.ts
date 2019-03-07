import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = { email: 'test@gmail.com', password: 'test' };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.validateCred(this.user).subscribe(data => {
      if (data) {
        this.user._id = data.user._id;
        this.user.token = data.token;
        // TODO: Pass this token to the dashboard as parameter. Use it for getLocations API call
        // TODO: Route to dashboard while checking for Routeguard
      }
    });
  }

}
