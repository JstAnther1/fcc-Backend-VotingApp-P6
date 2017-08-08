import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpolltitlesComponent } from './delpolltitles.component';

describe('DelpolltitlesComponent', () => {
  let component: DelpolltitlesComponent;
  let fixture: ComponentFixture<DelpolltitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelpolltitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelpolltitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
