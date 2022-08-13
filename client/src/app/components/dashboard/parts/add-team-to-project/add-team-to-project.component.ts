import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Team } from 'src/app/models/team';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';
import { loadTeams } from 'src/app/state/team/team.action';
import { selectTeams } from 'src/app/state/team/team.selector';

@Component({
  selector: 'add-team-to-project',
  templateUrl: './add-team-to-project.component.html',
  styleUrls: ['./add-team-to-project.component.css']
})
export class AddTeamToProjectComponent implements OnInit {
  teams: Team[] = [];
  token: string = "";
  selectedTeam: number = 0;

  @Input() teamIds: number[] = [];

  @Output() addTeamToProjectEmitter = new EventEmitter<number>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe(data => this.token = data);
    this.store.dispatch(loadTeams({token: this.token}));
    this.store.select(selectTeams).subscribe(data => this.teams = data.filter(team => this.teamIds.every(id => id !== team.id)));
  }

  addTeamToProject()
  {
    return this.addTeamToProjectEmitter.emit(this.selectedTeam);
  }

}
