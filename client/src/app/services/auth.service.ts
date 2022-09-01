import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginPayloadDto } from '../dto/auth/login-payload.dto';
import { CreateEmployeeDto } from '../dto/employee/employee.dto';
import { getAuthorizationHeader } from '../helper/header.helper';
import { Employee } from '../models/employee';

const BASE_URL = `${environment.api_url}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(loginPayload: LoginPayloadDto)
  {
    return this.httpClient.post<{access_token: string, employee: Employee}>(`${BASE_URL}/login`, loginPayload);
  }

  register(createEmployee: CreateEmployeeDto)
  {
    return this.httpClient.post(`${BASE_URL}/register`, createEmployee);
  }

  getAuthInfoByToken(token: string)
  {
    return this.httpClient.get<Employee>(`${BASE_URL}/me`, getAuthorizationHeader(token));
  }
}
