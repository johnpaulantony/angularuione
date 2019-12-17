import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupdationComponent } from './studentupdation.component';

describe('StudentupdationComponent', () => {
  let component: StudentupdationComponent;
  let fixture: ComponentFixture<StudentupdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentupdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
