import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project = {
    id: 0,
    name: "",
    deadline_timestamp: ""
  }

  @Output() updateProjectEmitter = new EventEmitter<number>();

  @Output() deleteProjectEmitter = new EventEmitter<number>();

  @Output() deleteTeamFromProjectEmitter = new EventEmitter<{teamId: number, projectId: number}>();

  @Output() addTeamToProjectEmitter = new EventEmitter<{teamId: number, projectId: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  editProject()
  {
    return this.updateProjectEmitter.emit(this.project.id);
  }

  remove()
  {
    return this.deleteProjectEmitter.emit(this.project.id);
  }

  removeTeamFromProject(teamId: number)
  {
    return this.deleteTeamFromProjectEmitter.emit({projectId: this.project.id, teamId});
  }

  getTeamsIds()
  {
    return this.project.teams?.map(team => team.id)!;
  }

  addTeamToProject(teamId: number)
  {
    return this.addTeamToProjectEmitter.emit({projectId: this.project.id, teamId});
  }

}
