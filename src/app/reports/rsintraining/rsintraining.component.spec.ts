import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsintrainingComponent } from './rsintraining.component';

describe('RsintrainingComponent', () => {
  let component: RsintrainingComponent;
  let fixture: ComponentFixture<RsintrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsintrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsintrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
