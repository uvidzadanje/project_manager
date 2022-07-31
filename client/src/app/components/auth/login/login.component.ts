import { Component, OnInit } from '@angular/core';
import { LoginPayloadDto } from 'src/app/dto/auth/login-payload.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPayload: LoginPayloadDto = {
    username: "",
    password: ""
  }
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    this.authService.login(this.loginPayload).subscribe((data) => localStorage.setItem("token", (data as {access_token: string}).access_token));

  }

}
