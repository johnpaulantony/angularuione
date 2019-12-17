import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstudentwiseComponent } from './rstudentwise.component';

describe('RstudentwiseComponent', () => {
  let component: RstudentwiseComponent;
  let fixture: ComponentFixture<RstudentwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstudentwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstudentwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
