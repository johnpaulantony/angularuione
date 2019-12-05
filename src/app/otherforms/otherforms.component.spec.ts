import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherformsComponent } from './otherforms.component';

describe('OtherformsComponent', () => {
  let component: OtherformsComponent;
  let fixture: ComponentFixture<OtherformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
