import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedscreenComponent } from './submittedscreen.component';

describe('SubmittedscreenComponent', () => {
  let component: SubmittedscreenComponent;
  let fixture: ComponentFixture<SubmittedscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
