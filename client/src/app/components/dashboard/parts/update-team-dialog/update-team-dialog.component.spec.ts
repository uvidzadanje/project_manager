import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamDialogComponent } from './update-team-dialog.component';

describe('UpdateTeamDialogComponent', () => {
  let component: UpdateTeamDialogComponent;
  let fixture: ComponentFixture<UpdateTeamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeamDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
