import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateTeamDto } from 'src/app/dto/team/team.dto';
import { addTeam } from 'src/app/state/team/team.action';

@Component({
  selector: 'add-team-form',
  templateUrl: './add-team-form.component.html',
  styleUrls: ['./add-team-form.component.css']
})
export class AddTeamFormComponent implements OnInit {
  @Input() token: string = "";
  team: CreateTeamDto = {
    name: ''
  }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

  }

  addTeamForm()
  {
    this.store.dispatch(addTeam({token: this.token, team: {...this.team}}))
  }

}
