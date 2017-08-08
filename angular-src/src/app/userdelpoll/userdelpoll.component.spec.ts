import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdelpollComponent } from './userdelpoll.component';

describe('UserdelpollComponent', () => {
  let component: UserdelpollComponent;
  let fixture: ComponentFixture<UserdelpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdelpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdelpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
