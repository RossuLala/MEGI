import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSzovegComponent } from './top-szoveg.component';

describe('TopSzovegComponent', () => {
  let component: TopSzovegComponent;
  let fixture: ComponentFixture<TopSzovegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSzovegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSzovegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
