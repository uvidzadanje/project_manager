import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateResponsibilityDto } from 'src/app/dto/responsibility/responsibility.dto';
import { Responsibility } from 'src/app/models/responsibility';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';
import { addResponsibility, deleteResponsibility, getResponsibilityByProjectAndTeam } from 'src/app/state/responsibility/responsibility.action';
import { selectResponsibilities } from 'src/app/state/responsibility/responsibility.selector';

@Component({
  selector: 'app-show-responsibilities',
  templateUrl: './show-responsibilities.component.html',
  styleUrls: ['./show-responsibilities.component.css']
})
export class ShowResponsibilitiesComponent implements OnInit {

  responsibilities: Responsibility[] = [];
  token: string = "";

  constructor(
    public dialogRef: MatDialogRef<ShowResponsibilitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {teamId: number, projectId: number},
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe(data => this.token = data);
    this.store.dispatch(getResponsibilityByProjectAndTeam({...this.data, token: this.token}));

    this.store.select(selectResponsibilities).subscribe(data => this.responsibilities = data);
  }

  close()
  {
    this.dialogRef.close();
  }

  removeResponsibility(id: number)
  {
    this.store.dispatch(deleteResponsibility({id, token: this.token}));
  }

  add(responsibility: CreateResponsibilityDto)
  {
    this.store.dispatch(addResponsibility({responsibility: {...responsibility}, token: this.token}));
  }

  getEmployeeIds()
  {
    return this.responsibilities.map(responsibility => responsibility.employee?.id).filter(id => !!id).map(id => <number>id);
  }

}
