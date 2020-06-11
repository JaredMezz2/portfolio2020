import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTabComponent } from './resume-tab.component';

describe('ResumeTabComponent', () => {
  let component: ResumeTabComponent;
  let fixture: ComponentFixture<ResumeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
