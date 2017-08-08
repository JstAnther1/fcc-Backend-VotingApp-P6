import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolltitlesComponent } from './polltitles.component';

describe('PolltitlesComponent', () => {
  let component: PolltitlesComponent;
  let fixture: ComponentFixture<PolltitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolltitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolltitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
