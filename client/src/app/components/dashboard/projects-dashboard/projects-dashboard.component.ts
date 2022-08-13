import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { UpdateProjectDto } from 'src/app/dto/project/project.dto';
import { Project } from 'src/app/models/project';
import { addTeamToProject, deleteProject, loadProjects, removeTeam, setSelectedProjectId, updateProject } from 'src/app/state/project/project.action';
import { selectProjects, selectSelectedProject, selectSelectedProjectId } from 'src/app/state/project/project.selector';
import { UpdateProjectDialogComponent } from '../parts/update-project-dialog/update-project-dialog.component';

@Component({
  selector: 'projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  @Input() accessToken: string = "";
  projects$: Observable<Project[]> = of([]);
  constructor(
    private store: Store<AppState>,
    public updateProjectDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects({token: this.accessToken}));
    this.projects$ = this.store.select(selectProjects);
  }

  remove(id: number)
  {
    this.store.dispatch(deleteProject({id, token: this.accessToken}));
  }

  openDialog(data: UpdateProjectDto)
  {
    const dialogRef = this.updateProjectDialog.open(UpdateProjectDialogComponent, {
      width: "300px",
      data: {...data}
    })

    dialogRef.afterClosed().subscribe(data => {
      if(!data) return;

      let id: number = 0;

      this.store.select(selectSelectedProjectId).subscribe(data => id = data);
      this.store.dispatch(updateProject({token: this.accessToken, data: data, id }));
    })
  }

  editProject(id: number)
  {
    this.store.dispatch(setSelectedProjectId({id}));
    let project: Project | undefined;

    this.store.select(selectSelectedProject).subscribe(data => project = data);

    if(!project) return;

    this.openDialog(project as UpdateProjectDto);
  }

  removeTeamFromProject(data: {projectId: number, teamId: number})
  {
    const {projectId, teamId} = data;
    this.store.dispatch(removeTeam({teamId, projectId, token: this.accessToken}));
  }

  addTeam(data: {projectId: number, teamId: number})
  {
    const {projectId, teamId} = data;
    this.store.dispatch(addTeamToProject({projectId, teamId, token: this.accessToken}));
  }

}
