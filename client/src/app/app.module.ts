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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

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
import { TeamAdditionalInfoComponent } from './components/parts/team-additional-info/team-additional-info.component';
import { TeamItemComponent } from './components/dashboard/parts/team-item/team-item.component';
import { ProjectItemComponent } from './components/dashboard/parts/project-item/project-item.component';
import { AddTeamToProjectComponent } from './components/dashboard/parts/add-team-to-project/add-team-to-project.component';
import { ResponsibilityDashboardComponent } from './components/dashboard/responsibility-dashboard/responsibility-dashboard.component';
import { responsibilityReducer } from './state/responsibility/responsibility.reducer';
import { ResponsibilityEffects } from './state/responsibility/responsibility.effects';
import { ResponsibilityItemComponent } from './components/dashboard/parts/responsibility-item/responsibility-item.component';
import { AddEmployeeToTeamComponent } from './components/dashboard/parts/add-employee-to-team/add-employee-to-team.component';
import { employeeReducer } from './state/employee/employee.reducer';
import { EmployeeEffects } from './state/employee/employee.effects';
import { ShowResponsibilitiesComponent } from './components/dashboard/parts/show-responsibilities/show-responsibilities.component';
import { AddResponsibilityComponent } from './components/dashboard/parts/add-responsibility/add-responsibility.component';
import { ShowResponsibilityComponent } from './components/dashboard/parts/show-responsibility/show-responsibility.component';
import { employeeTypeReducer } from './state/employee-type/employee-type.reducer';
import { EmployeeTypeEffects } from './state/employee-type/employee-type.effects';
import { AuthGuard } from './guards/auth.guard';
import { errorReducer } from './state/error/error.reducer';

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
    AccountSettingsComponent,
    TeamAdditionalInfoComponent,
    TeamItemComponent,
    ProjectItemComponent,
    AddTeamToProjectComponent,
    ResponsibilityDashboardComponent,
    ResponsibilityItemComponent,
    AddEmployeeToTeamComponent,
    ShowResponsibilitiesComponent,
    AddResponsibilityComponent,
    ShowResponsibilityComponent
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
    MatCardModule,

    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot<AppState>({
      auth: authReducer,
      teams: teamReducer,
      projects: projectReducer,
      responsibilites: responsibilityReducer,
      employees: employeeReducer,
      employeeType: employeeTypeReducer,
      errors: errorReducer
    }),
    EffectsModule.forRoot([
      AuthEffects,
      TeamEffects,
      ProjectEffects,
      ResponsibilityEffects,
      EmployeeEffects,
      EmployeeTypeEffects
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
