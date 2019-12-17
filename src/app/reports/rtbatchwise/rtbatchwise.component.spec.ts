import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtbatchwiseComponent } from './rtbatchwise.component';

describe('RtbatchwiseComponent', () => {
  let component: RtbatchwiseComponent;
  let fixture: ComponentFixture<RtbatchwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtbatchwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtbatchwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
