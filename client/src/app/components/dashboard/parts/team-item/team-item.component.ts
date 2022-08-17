import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team = {
    id: 0,
    name: "",
    employees: []
  }

  @Output() editTeamEmitter = new EventEmitter<number>();

  @Output() removeTeamEmitter = new EventEmitter<number>();

  @Output() addEmployeeToTeamEmitter = new EventEmitter<{teamId: number, employeeId: number}>();

  @Output() removeEmployeeFromTeamEmitter = new EventEmitter<{teamId: number, employeeId: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  editTeam()
  {
    return this.editTeamEmitter.emit(this.team.id);
  }

  remove()
  {
    return this.removeTeamEmitter.emit(this.team.id);
  }

  addEmployeeToTeam(id: number)
  {
    this.addEmployeeToTeamEmitter.emit({teamId: this.team.id, employeeId: id});
  }

  removeEmployeeFromTeam(id: number)
  {
    this.removeEmployeeFromTeamEmitter.emit({teamId: this.team.id, employeeId: id});
  }

  getEmployeeIds()
  {
    return this.team.employees?.map(employee => employee.id)!;
  }

}
