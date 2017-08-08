import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndpollchartComponent } from './indpollchart.component';

describe('IndpollchartComponent', () => {
  let component: IndpollchartComponent;
  let fixture: ComponentFixture<IndpollchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndpollchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndpollchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
