import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItnComponent } from './top-itn.component';

describe('TopItnComponent', () => {
  let component: TopItnComponent;
  let fixture: ComponentFixture<TopItnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopItnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopItnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
