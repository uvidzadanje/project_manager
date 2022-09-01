import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Employee } from 'src/app/models/employee';
import { selectAuthToken } from 'src/app/state/auth/auth.selector';
import { loadEmployees } from 'src/app/state/employee/employee.action';
import { selectEmployees } from 'src/app/state/employee/employee.selector';

@Component({
  selector: 'add-employee-to-team',
  templateUrl: './add-employee-to-team.component.html',
  styleUrls: ['./add-employee-to-team.component.css']
})
export class AddEmployeeToTeamComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployeeId = 0;

  @Input() employeeIds: number[] = [];

  @Output() addEmployeeToTeamEmitter = new EventEmitter<number>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAuthToken).pipe(take(1)).subscribe(data => this.store.dispatch(loadEmployees({token: data})))
    this.store.select(selectEmployees).subscribe(data => this.employees = data.filter(employee => this.employeeIds.every(id => id !== employee.id)));
  }

  addEmployeeToTeam()
  {
    return this.addEmployeeToTeamEmitter.emit(this.selectedEmployeeId);
  }

}
