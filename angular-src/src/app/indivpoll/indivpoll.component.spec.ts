import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivpollComponent } from './indivpoll.component';

describe('IndivpollComponent', () => {
  let component: IndivpollComponent;
  let fixture: ComponentFixture<IndivpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
