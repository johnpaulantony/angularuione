import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RweeklyComponent } from './rweekly.component';

describe('RweeklyComponent', () => {
  let component: RweeklyComponent;
  let fixture: ComponentFixture<RweeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RweeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RweeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
