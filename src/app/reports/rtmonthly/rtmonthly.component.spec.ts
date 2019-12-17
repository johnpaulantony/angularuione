import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmonthlyComponent } from './rtmonthly.component';

describe('RtmonthlyComponent', () => {
  let component: RtmonthlyComponent;
  let fixture: ComponentFixture<RtmonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
