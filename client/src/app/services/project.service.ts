import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project/project.dto';
import { getAuthorizationHeader } from '../helper/header.helper';
import { Project } from '../models/project';

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
    return this.httpClient.get<Project[]>(BASE_API_URL, getAuthorizationHeader(token))
  }

  getOne(id: number, token: string)
  {
    return this.httpClient.get<Project>(`${BASE_API_URL}/${id}`, getAuthorizationHeader(token))
  }

  add(data: {token: string, project: CreateProjectDto})
  {
    return this.httpClient.post<Project>(BASE_API_URL, data.project, getAuthorizationHeader(data.token))
  }

  update(data: {token: string, id: number, payload: UpdateProjectDto})
  {
    return this.httpClient.patch(`${BASE_API_URL}/${data.id}`, data.payload, getAuthorizationHeader(data.token))
  }

  delete(data: {token: string, id: number})
  {
    return this.httpClient.delete(`${BASE_API_URL}/${data.id}`, getAuthorizationHeader(data.token))
  }

  removeTeamFromProject(projectId: number, teamId: number, token: string)
  {
    return this.httpClient.delete(`${BASE_API_URL}/${projectId}/team/${teamId}`, getAuthorizationHeader(token))
  }

  addTeamToProject(projectId: number, teamId: number, token: string)
  {
    return this.httpClient.patch<Project>(`${BASE_API_URL}/team`, {project_id: projectId, team_id: teamId}, getAuthorizationHeader(token))
  }
}
