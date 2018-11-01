import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgenyComponent } from './igeny.component';

describe('IgenyComponent', () => {
  let component: IgenyComponent;
  let fixture: ComponentFixture<IgenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
