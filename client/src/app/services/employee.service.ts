import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UpdateEmployeeDto } from '../dto/employee/employee.dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  update(data: {id: number, changes: UpdateEmployeeDto, accessToken: string})
  {
    return this.httpClient.patch(environment.api_url+"/employee/"+data.id, data.changes, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.accessToken}`
      })
    })
  }
}
