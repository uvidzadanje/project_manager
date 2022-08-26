import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateResponsibilityDto } from 'src/app/dto/responsibility/responsibility.dto';
import { Employee } from 'src/app/models/employee';
import { selectEmployeeWithoutResponsibility } from 'src/app/state/employee/employee.selector';

@Component({
  selector: 'add-responsibility',
  templateUrl: './add-responsibility.component.html',
  styleUrls: ['./add-responsibility.component.css']
})
export class AddResponsibilityComponent implements OnInit {

  responsibility: CreateResponsibilityDto = {
    description: "",
    employeeId: 0,
    teamId: 0,
    projectId: 0
  }
  selectedEmployee: number = 0;
  employees: Employee[] = [];

  @Output() addResponsibilityEmitter = new EventEmitter<CreateResponsibilityDto>();

  @Input() employeeIds: number[] = [];

  @Input() teamId: number = 0;

  @Input() projectId: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.responsibility.projectId = this.projectId;
    this.responsibility.teamId = this.teamId;

    this.store.select(selectEmployeeWithoutResponsibility)
    .subscribe(employees => {
        this.employees = employees
      }
    );
  }

  addResponsibility()
  {
    this.responsibility.employeeId = this.selectedEmployee;

    this.addResponsibilityEmitter.emit(this.responsibility);

    this.clearInputs();
  }

  clearInputs()
  {
    this.selectedEmployee = 0;
    this.responsibility.description = "";
  }

}
