import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTeamDto, UpdateTeamDto } from '../dto/team/team.dto';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(token: string)
  {
    return this.httpClient.get(environment.api_url+"/team", {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

  add(data: {token: string, team: CreateTeamDto})
  {
    const {team, token} = data;
    return this.httpClient.post(environment.api_url+"/team", team, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  update(data: {token: string, team: UpdateTeamDto, id: number})
  {
    const {token, team, id} = data;
    return this.httpClient.patch(environment.api_url+"/team/"+id, team, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }

  delete(data: {token: string, id: number})
  {
    const {token, id} = data;
    return this.httpClient.delete(environment.api_url+"/team/"+id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    })
  }
}
