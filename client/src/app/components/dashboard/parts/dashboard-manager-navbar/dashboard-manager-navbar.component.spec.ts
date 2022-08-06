import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagerNavbarComponent } from './dashboard-manager-navbar.component';

describe('DashboardManagerNavbarComponent', () => {
  let component: DashboardManagerNavbarComponent;
  let fixture: ComponentFixture<DashboardManagerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardManagerNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManagerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
