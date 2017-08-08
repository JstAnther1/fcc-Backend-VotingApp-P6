import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewpollComponent } from './usernewpoll.component';

describe('UsernewpollComponent', () => {
  let component: UsernewpollComponent;
  let fixture: ComponentFixture<UsernewpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernewpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
