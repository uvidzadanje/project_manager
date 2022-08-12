import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateProjectDto } from 'src/app/dto/project/project.dto';
import { addProject } from 'src/app/state/project/project.action';

function getDateAndTime(date: Date)
{
  return `${date.toISOString().slice(0, -8)}`;
}

@Component({
  selector: 'add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {
  @Input() accessToken = "";
  project: CreateProjectDto = {
    name: "",
    deadline_timestamp: getDateAndTime(new Date())
  }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

  }

  addProjectForm()
  {
    this.store.dispatch(addProject({token: this.accessToken, project: {...this.project}}));
  }
}
