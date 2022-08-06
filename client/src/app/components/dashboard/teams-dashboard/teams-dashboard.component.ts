import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Team } from 'src/app/models/team';
import { deleteTeam, loadTeams } from 'src/app/state/team/team.action';
import { selectTeams } from 'src/app/state/team/team.selector';

@Component({
  selector: 'teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
  styleUrls: ['./teams-dashboard.component.css']
})
export class TeamsDashboardComponent implements OnInit {
  @Input() accessToken = "";

  teams$: Observable<Team[]> = of([]);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTeams({token: this.accessToken}));
    this.teams$ = this.store.select(selectTeams);
  }

  remove(id: number)
  {
    this.store.dispatch(deleteTeam({token: this.accessToken, id}));
  }

}
