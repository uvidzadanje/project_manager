import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTeamDto, UpdateTeamDto } from '../dto/team/team.dto';

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
    return this.httpClient.get(BASE_API_URL, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  getOne(id: number, token: string)
  {
    return this.httpClient.get(`${BASE_API_URL}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  add(data: {token: string, team: CreateTeamDto})
  {
    const {team, token} = data;
    return this.httpClient.post(BASE_API_URL, team, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  update(data: {token: string, team: UpdateTeamDto, id: number})
  {
    const {token, team, id} = data;
    return this.httpClient.patch(`${BASE_API_URL}/${id}`, team, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  delete(data: {token: string, id: number})
  {
    const {token, id} = data;
    return this.httpClient.delete(`${BASE_API_URL}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  addEmployee(data: {teamId: number, employeeId: number, token: string})
  {
    const {teamId, employeeId, token} = data;
    return this.httpClient.patch(`${BASE_API_URL}/employee`, {team_id: teamId, employee_id: employeeId}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  removeEmployee(data: {teamId: number, employeeId: number, token: string})
  {
    const {teamId, employeeId, token} = data;
    return this.httpClient.delete(`${BASE_API_URL}/${teamId}/employee/${employeeId}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }
}
