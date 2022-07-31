import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginPayloadDto } from '../dto/auth/login-payload.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(loginPayload: LoginPayloadDto)
  {
    return this.httpClient.post(environment.api_url+"/auth/login", loginPayload);
  }
}
