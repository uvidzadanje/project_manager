import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Project } from 'src/app/models/project';
import { deleteProject, loadProjects } from 'src/app/state/project/project.action';
import { selectProjects } from 'src/app/state/project/project.selector';

@Component({
  selector: 'projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  @Input() accessToken: string = "";
  projects$: Observable<Project[]> = of([]);
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects({token: this.accessToken}));
    this.projects$ = this.store.select(selectProjects);
  }

  remove(id: number)
  {
    this.store.dispatch(deleteProject({id, token: this.accessToken}));
  }

}
