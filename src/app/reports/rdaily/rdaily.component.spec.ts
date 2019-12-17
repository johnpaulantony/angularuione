import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdailyComponent } from './rdaily.component';

describe('RdailyComponent', () => {
  let component: RdailyComponent;
  let fixture: ComponentFixture<RdailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
