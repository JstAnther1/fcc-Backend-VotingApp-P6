import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Indpollchart2Component } from './indpollchart2.component';

describe('Indpollchart2Component', () => {
  let component: Indpollchart2Component;
  let fixture: ComponentFixture<Indpollchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Indpollchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Indpollchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
