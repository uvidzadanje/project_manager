import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/parts/navbar/navbar.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effects';
import { AppState } from './app.state';
import { authReducer } from './state/auth/auth.reducer';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { ManagerDashboardComponent } from './components/dashboard/manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboard/employee-dashboard/employee-dashboard.component';
import { DashboardManagerSidenavComponent } from './components/dashboard/parts/dashboard-manager-sidenav/dashboard-manager-sidenav.component';
import { DashboardManagerNavbarComponent } from './components/dashboard/parts/dashboard-manager-navbar/dashboard-manager-navbar.component';
import { ProjectsDashboardComponent } from './components/dashboard/projects-dashboard/projects-dashboard.component';
import { TeamsDashboardComponent } from './components/dashboard/teams-dashboard/teams-dashboard.component';
import { teamReducer } from './state/team/team.reducer';
import { TeamEffects } from './state/team/team.effects';
import { AddTeamFormComponent } from './components/dashboard/parts/add-team-form/add-team-form.component';
import { projectReducer } from './state/project/project.reducer';
import { AddProjectFormComponent } from './components/dashboard/parts/add-project-form/add-project-form.component';
import { ProjectEffects } from './state/project/project.effects';
import { UpdateTeamDialogComponent } from './components/dashboard/parts/update-team-dialog/update-team-dialog.component';
import { UpdateProjectDialogComponent } from './components/dashboard/parts/update-project-dialog/update-project-dialog.component';
import { AccountSettingsComponent } from './components/auth/account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    MainDashboardComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
    DashboardManagerSidenavComponent,
    DashboardManagerNavbarComponent,
    ProjectsDashboardComponent,
    TeamsDashboardComponent,
    AddTeamFormComponent,
    AddProjectFormComponent,
    UpdateTeamDialogComponent,
    UpdateProjectDialogComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot<AppState>({
      auth: authReducer,
      teams: teamReducer,
      projects: projectReducer
    }),
    EffectsModule.forRoot([
      AuthEffects,
      TeamEffects,
      ProjectEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
