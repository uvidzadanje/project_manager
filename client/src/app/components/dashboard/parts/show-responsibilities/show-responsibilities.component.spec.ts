import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResponsibilitiesComponent } from './show-responsibilities.component';

describe('ShowResponsibilitiesComponent', () => {
  let component: ShowResponsibilitiesComponent;
  let fixture: ComponentFixture<ShowResponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowResponsibilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
