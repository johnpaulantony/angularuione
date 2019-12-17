import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmonthlyComponent } from './rmonthly.component';

describe('RmonthlyComponent', () => {
  let component: RmonthlyComponent;
  let fixture: ComponentFixture<RmonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
