import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicscoveredComponent } from './topicscovered.component';

describe('TopicscoveredComponent', () => {
  let component: TopicscoveredComponent;
  let fixture: ComponentFixture<TopicscoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicscoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicscoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
