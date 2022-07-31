import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeType } from '../models/employee-type';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll()
  {
    return this.httpClient.get<EmployeeType[]>(environment.api_url+"/employee-type");
  }
}
