import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BASE_API_URL = environment.api_url+ "/responsibility";

@Injectable({
  providedIn: 'root'
})
export class ResponsibilityService {

  constructor(
    private httpClien: HttpClient
  ) { }

  getByEmployee(id: number, token: string)
  {
    return this.httpClien.get(`${BASE_API_URL}/employee/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }
}
