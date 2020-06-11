import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTabComponent } from './link-tab.component';

describe('LinkTabComponent', () => {
  let component: LinkTabComponent;
  let fixture: ComponentFixture<LinkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
