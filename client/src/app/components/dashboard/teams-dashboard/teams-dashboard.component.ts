import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { UpdateTeamDto } from 'src/app/dto/team/team.dto';
import { Team } from 'src/app/models/team';
import { deleteTeam, loadTeams, setSelectTeamId, updateTeam } from 'src/app/state/team/team.action';
import { selectSelectedTeam, selectTeams, selectTeamId } from 'src/app/state/team/team.selector';
import { UpdateTeamDialogComponent } from '../parts/update-team-dialog/update-team-dialog.component';

@Component({
  selector: 'teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
  styleUrls: ['./teams-dashboard.component.css']
})
export class TeamsDashboardComponent implements OnInit {
  @Input() accessToken = "";

  teams$: Observable<Team[]> = of([]);

  constructor(
    private store: Store<AppState>,
    public updateTeamDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTeams({token: this.accessToken}));
    this.teams$ = this.store.select(selectTeams);
  }

  remove(id: number)
  {
    this.store.dispatch(deleteTeam({token: this.accessToken, id}));
  }

  openDialog(data: UpdateTeamDto)
  {
    const dialogRef = this.updateTeamDialog.open(UpdateTeamDialogComponent, {
      width: "300px",
      data: {...data}
    })

    dialogRef.afterClosed().subscribe(data => {
      if(!data) return;
      let id: number = 0;

      this.store.select(selectTeamId).subscribe(data => id = data);
      this.store.dispatch(updateTeam({token: this.accessToken, team: data as UpdateTeamDto, id: id}))
    })
  }

  editTeam(id: number)
  {
    this.store.dispatch(setSelectTeamId({id}));
    let team: Team | undefined;
    this.store.select(selectSelectedTeam).subscribe(data => team = data);

    if(!team) return;

    this.openDialog(team as UpdateTeamDto);
  }

}
