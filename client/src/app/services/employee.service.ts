import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UpdateEmployeeDto } from '../dto/employee/employee.dto';

const BASE_API_URL = environment.api_url+"/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  update(data: {id: number, changes: UpdateEmployeeDto, accessToken: string})
  {
    return this.httpClient.patch(`${BASE_API_URL}/${data.id}`, data.changes, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.accessToken}`
      })
    })
  }

  getAll(token: string)
  {
    return this.httpClient.get(`${BASE_API_URL}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  getOne(id: number, token: string)
  {
    return this.httpClient.get(`${BASE_API_URL}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }
}
