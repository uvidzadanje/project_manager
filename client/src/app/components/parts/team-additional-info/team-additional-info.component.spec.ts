import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdditionalInfoComponent } from './team-additional-info.component';

describe('TeamAdditionalInfoComponent', () => {
  let component: TeamAdditionalInfoComponent;
  let fixture: ComponentFixture<TeamAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAdditionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
