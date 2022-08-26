import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResponsibilityComponent } from './show-responsibility.component';

describe('ShowResponsibilityComponent', () => {
  let component: ShowResponsibilityComponent;
  let fixture: ComponentFixture<ShowResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
