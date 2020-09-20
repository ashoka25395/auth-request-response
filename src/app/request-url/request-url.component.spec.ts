import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUrlComponent } from './request-url.component';

describe('RequestUrlComponent', () => {
  let component: RequestUrlComponent;
  let fixture: ComponentFixture<RequestUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
