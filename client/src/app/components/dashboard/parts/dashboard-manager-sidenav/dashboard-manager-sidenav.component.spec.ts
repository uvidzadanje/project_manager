import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagerSidenavComponent } from './dashboard-manager-sidenav.component';

describe('DashboardManagerSidenavComponent', () => {
  let component: DashboardManagerSidenavComponent;
  let fixture: ComponentFixture<DashboardManagerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardManagerSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManagerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
