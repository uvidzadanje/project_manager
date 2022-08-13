import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project/project.dto';

const BASE_API_URL = environment.api_url+"/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(token: string)
  {
    return this.httpClient.get(BASE_API_URL, {
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

  add(data: {token: string, project: CreateProjectDto})
  {
    return this.httpClient.post(BASE_API_URL, data.project, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }

  update(data: {token: string, id: number, payload: UpdateProjectDto})
  {
    return this.httpClient.patch(`${BASE_API_URL}/${data.id}`, data.payload, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }

  delete(data: {token: string, id: number})
  {
    return this.httpClient.delete(`${BASE_API_URL}/${data.id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      })
    })
  }

  removeTeamFromProject(projectId: number, teamId: number, token: string)
  {
    return this.httpClient.delete(`${BASE_API_URL}/${projectId}/team/${teamId}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  addTeamToProject(projectId: number, teamId: number, token: string)
  {
    return this.httpClient.patch(`${BASE_API_URL}/team`, {project_id: projectId, team_id: teamId}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }
}
