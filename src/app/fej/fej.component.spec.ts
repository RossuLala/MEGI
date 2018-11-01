import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FejComponent } from './fej.component';

describe('FejComponent', () => {
  let component: FejComponent;
  let fixture: ComponentFixture<FejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
