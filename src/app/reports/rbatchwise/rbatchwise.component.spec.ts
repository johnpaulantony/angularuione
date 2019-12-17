import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbatchwiseComponent } from './rbatchwise.component';

describe('RbatchwiseComponent', () => {
  let component: RbatchwiseComponent;
  let fixture: ComponentFixture<RbatchwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbatchwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbatchwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
