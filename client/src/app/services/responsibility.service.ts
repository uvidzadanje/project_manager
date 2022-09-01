import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateResponsibilityDto, UpdateResponsibilityDto } from '../dto/responsibility/responsibility.dto';
import { getAuthorizationHeader } from '../helper/header.helper';
import { Responsibility } from '../models/responsibility';

const BASE_API_URL = environment.api_url+ "/responsibility";

@Injectable({
  providedIn: 'root'
})
export class ResponsibilityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getByEmployee(id: number, token: string)
  {
    return this.httpClient.get<Responsibility[]>(`${BASE_API_URL}/employee/${id}`, getAuthorizationHeader(token));
  }

  getByProjectAndTeam({teamId, projectId, token}: {teamId: number, projectId: number, token: string})
  {
    return this.httpClient.get<Responsibility[]>(`${BASE_API_URL}/project/${projectId}/team/${teamId}`, getAuthorizationHeader(token));
  }

  add({responsibility, token}: {responsibility: CreateResponsibilityDto, token: string})
  {
    return this.httpClient.post<Responsibility>(`${BASE_API_URL}`, {
      ...responsibility,
      team_id: responsibility.teamId,
      project_id: responsibility.projectId,
      employee_id: responsibility.employeeId
    }, getAuthorizationHeader(token));
  }

  update({id, token, changes}: {id: number, token: string, changes: UpdateResponsibilityDto})
  {
    return this.httpClient.patch(`${BASE_API_URL}/${id}`, changes, getAuthorizationHeader(token));
  }

  delete({id, token}: {id: number, token: string})
  {
    return this.httpClient.delete(`${BASE_API_URL}/${id}`, getAuthorizationHeader(token));
  }
}
