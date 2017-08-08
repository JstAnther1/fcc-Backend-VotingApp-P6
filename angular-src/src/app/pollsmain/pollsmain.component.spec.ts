import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsmainComponent } from './pollsmain.component';

describe('PollsmainComponent', () => {
  let component: PollsmainComponent;
  let fixture: ComponentFixture<PollsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
