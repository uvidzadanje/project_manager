import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityItemComponent } from './responsibility-item.component';

describe('ResponsibilityItemComponent', () => {
  let component: ResponsibilityItemComponent;
  let fixture: ComponentFixture<ResponsibilityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
