import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseUrlComponent } from './response-url.component';

describe('ResponseUrlComponent', () => {
  let component: ResponseUrlComponent;
  let fixture: ComponentFixture<ResponseUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
