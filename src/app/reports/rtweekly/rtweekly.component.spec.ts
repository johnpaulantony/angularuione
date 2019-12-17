import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtweeklyComponent } from './rtweekly.component';

describe('RtweeklyComponent', () => {
  let component: RtweeklyComponent;
  let fixture: ComponentFixture<RtweeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtweeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtweeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
