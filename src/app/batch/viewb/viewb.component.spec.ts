import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbComponent } from './viewb.component';

describe('ViewbComponent', () => {
  let component: ViewbComponent;
  let fixture: ComponentFixture<ViewbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
