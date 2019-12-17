import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsdeployedComponent } from './rsdeployed.component';

describe('RsdeployedComponent', () => {
  let component: RsdeployedComponent;
  let fixture: ComponentFixture<RsdeployedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsdeployedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsdeployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
