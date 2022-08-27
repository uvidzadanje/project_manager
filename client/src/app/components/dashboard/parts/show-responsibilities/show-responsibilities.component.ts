import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { skip, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { CreateResponsibilityDto, UpdateResponsibilityDto } from 'src/app/dto/responsibility/responsibility.dto';
import { Responsibility } from 'src/app/models/responsibility';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';
import { loadEmployeesByTeam, setSelectedEmployeeIds } from 'src/app/state/employee/employee.action';
import { addResponsibility, deleteResponsibility, getResponsibilityByProjectAndTeam, updateResponsibility } from 'src/app/state/responsibility/responsibility.action';
import { selectResponsibilities } from 'src/app/state/responsibility/responsibility.selector';

@Component({
  selector: 'app-show-responsibilities',
  templateUrl: './show-responsibilities.component.html',
  styleUrls: ['./show-responsibilities.component.css']
})
export class ShowResponsibilitiesComponent implements OnInit {

  responsibilities: Responsibility[] = [];
  token: string = "";

  paramsId = {
    projectId: 0,
    teamId: 0
  }

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.paramsId.projectId = +params["projectId"];
      this.paramsId.teamId = +params["teamId"];
    })

    this.store.select(selectAuthToken).subscribe(data => {
      if(!data) return;
      this.token = data;
      this.store.dispatch(getResponsibilityByProjectAndTeam({...this.paramsId, token: this.token}));
    });


    this.store.select(selectResponsibilities).pipe(skip(1), take(1)).subscribe(() => {
      this.store.dispatch(loadEmployeesByTeam({teamId: this.paramsId.teamId}));
    });

    this.store.select(selectResponsibilities).pipe(skip(1)).subscribe(data => {
      this.responsibilities = data;
      this.store.dispatch(setSelectedEmployeeIds({employeeIds: this.getEmployeeIds()}));
    });

  }

  remove({id}: {id: number})
  {
    this.store.dispatch(deleteResponsibility({id, token: this.token}));
  }

  add(responsibility: CreateResponsibilityDto)
  {
    this.store.dispatch(addResponsibility({responsibility: {...responsibility}, token: this.token}));
  }

  update({id, changes}: {id: number, changes: UpdateResponsibilityDto})
  {
    this.store.dispatch(updateResponsibility({id, changes, token: this.token}));
  }

  getEmployeeIds()
  {
    return this.responsibilities.map(responsibility => responsibility.employee?.id).filter(id => !!id).map(id => <number>id);
  }

}
