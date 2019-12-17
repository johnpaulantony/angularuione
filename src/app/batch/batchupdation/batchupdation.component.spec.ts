import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchupdationComponent } from './batchupdation.component';

describe('BatchupdationComponent', () => {
  let component: BatchupdationComponent;
  let fixture: ComponentFixture<BatchupdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchupdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
