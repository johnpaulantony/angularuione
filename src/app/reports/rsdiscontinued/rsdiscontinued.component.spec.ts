import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsdiscontinuedComponent } from './rsdiscontinued.component';

describe('RsdiscontinuedComponent', () => {
  let component: RsdiscontinuedComponent;
  let fixture: ComponentFixture<RsdiscontinuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsdiscontinuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsdiscontinuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
