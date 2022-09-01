import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Employee } from 'src/app/models/employee';
import { Team } from 'src/app/models/team';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';
import { loadMoreInfoForTeam, setSelectTeamId } from 'src/app/state/team/team.action';
import { selectSelectedTeam, selectTeamId, loadedTeam } from 'src/app/state/team/team.selector';

@Component({
  selector: 'team-additional-info',
  templateUrl: './team-additional-info.component.html',
  styleUrls: ['./team-additional-info.component.css']
})
export class TeamAdditionalInfoComponent implements OnInit {

  @Input() id: number = 0;
  token: string = "";
  teamInfo$: Observable<Team> = of({
    id: 0,
    name: "",
    employees: []
  })

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe(data => this.token = data);
    this.store.dispatch(loadMoreInfoForTeam({id: this.id, token: this.token}));
    this.teamInfo$ = this.store.select(loadedTeam);
  }
}
