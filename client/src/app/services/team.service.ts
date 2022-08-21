import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTeamDto, UpdateTeamDto } from '../dto/team/team.dto';
import { getAuthorizationHeader } from '../helper/header.helper';

const BASE_API_URL = `${environment.api_url}/team`;

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(token: string)
  {
    return this.httpClient.get(BASE_API_URL, getAuthorizationHeader(token));
  }

  getOne(id: number, token: string)
  {
    return this.httpClient.get(`${BASE_API_URL}/${id}`, getAuthorizationHeader(token))
  }

  add(data: {token: string, team: CreateTeamDto})
  {
    const {team, token} = data;
    return this.httpClient.post(BASE_API_URL, team, getAuthorizationHeader(token))
  }

  update(data: {token: string, team: UpdateTeamDto, id: number})
  {
    const {token, team, id} = data;
    return this.httpClient.patch(`${BASE_API_URL}/${id}`, team, getAuthorizationHeader(token))
  }

  delete(data: {token: string, id: number})
  {
    const {token, id} = data;
    return this.httpClient.delete(`${BASE_API_URL}/${id}`, getAuthorizationHeader(token))
  }

  addEmployee(data: {teamId: number, employeeId: number, token: string})
  {
    const {teamId, employeeId, token} = data;
    return this.httpClient.patch(`${BASE_API_URL}/employee`, {team_id: teamId, employee_id: employeeId}, getAuthorizationHeader(token))
  }

  removeEmployee(data: {teamId: number, employeeId: number, token: string})
  {
    const {teamId, employeeId, token} = data;
    return this.httpClient.delete(`${BASE_API_URL}/${teamId}/employee/${employeeId}`, getAuthorizationHeader(token))
  }
}
