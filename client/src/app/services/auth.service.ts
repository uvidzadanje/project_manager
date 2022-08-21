import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginPayloadDto } from '../dto/auth/login-payload.dto';
import { CreateEmployeeDto } from '../dto/employee/employee.dto';
import { getAuthorizationHeader } from '../helper/header.helper';

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

  register(createEmployee: CreateEmployeeDto)
  {
    return this.httpClient.post(environment.api_url+"/auth/register", createEmployee);
  }

  getAuthInfoByToken(token: string)
  {
    return this.httpClient.get(environment.api_url+"/auth/me", getAuthorizationHeader(token));
  }
}
