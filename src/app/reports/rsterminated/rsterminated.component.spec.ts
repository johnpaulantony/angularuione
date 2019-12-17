import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsterminatedComponent } from './rsterminated.component';

describe('RsterminatedComponent', () => {
  let component: RsterminatedComponent;
  let fixture: ComponentFixture<RsterminatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsterminatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsterminatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
