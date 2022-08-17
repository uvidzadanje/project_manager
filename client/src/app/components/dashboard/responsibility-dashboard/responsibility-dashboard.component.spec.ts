import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityDashboardComponent } from './responsibility-dashboard.component';

describe('ResponsibilityDashboardComponent', () => {
  let component: ResponsibilityDashboardComponent;
  let fixture: ComponentFixture<ResponsibilityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
