import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project/project.dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(token: string)
  {
    return this.httpClient.get(environment.api_url+"/project", {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  add(data: {token: string, project: CreateProjectDto})
  {
    return this.httpClient.post(environment.api_url+"/project", data.project, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }

  update(data: {token: string, id: number, payload: UpdateProjectDto})
  {
    return this.httpClient.patch(environment.api_url+"/project/"+data.id, data.payload, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }

  delete(data: {token: string, id: number})
  {
    return this.httpClient.delete(environment.api_url+"/project/"+data.id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }
}
