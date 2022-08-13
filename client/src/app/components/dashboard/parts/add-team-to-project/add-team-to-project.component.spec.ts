import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamToProjectComponent } from './add-team-to-project.component';

describe('AddTeamToProjectComponent', () => {
  let component: AddTeamToProjectComponent;
  let fixture: ComponentFixture<AddTeamToProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamToProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
