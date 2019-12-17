import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtdailyComponent } from './rtdaily.component';

describe('RtdailyComponent', () => {
  let component: RtdailyComponent;
  let fixture: ComponentFixture<RtdailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtdailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
