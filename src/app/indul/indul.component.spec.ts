import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndulComponent } from './indul.component';

describe('IndulComponent', () => {
  let component: IndulComponent;
  let fixture: ComponentFixture<IndulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
